import bcrypt from 'bcryptjs';
import pool from '../config/db.js'; 
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail, findUserByAppleId, createAppleUser } from '../models/userModel.js';
import { generateToken } from '../utils/generateToken.js';
import appleService from "../services/appleAuthService.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password, avatar_url } = req.body;

        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ message: 'Email already registered' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(name, email, hashedPassword, avatar_url);

        const token = generateToken(user);
        res.status(201).json({ message: 'Signup successful', user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // 1. Find user by email
    const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const user = userResult.rows[0];

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 4. Return success response
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export const appleLogin = async (req, res) => {
    try {
        const { id_token } = req.body;

        if (!id_token) {
            return res.status(400).json({ message: "id_token is required" });
        }

        // 1. Verify Apple Token
        const appleData = await appleService.verifyIdToken(id_token);

        const appleId = appleData.sub;
        const email = appleData.email || null;

        // 2. Check if user exists by apple_id
        let user = await findUserByAppleId(appleId);

        if (!user) {
            // If not found by appleId but email exists, attach appleId
            if (email) {
                const existingEmailUser = await findUserByEmail(email);

                if (existingEmailUser) {
                    user = await attachAppleId(existingEmailUser.id, appleId);
                }
            }

            // If still no user → create new
            if (!user) {
                user = await createUserWithApple(email, appleId);
            }
        }

        // 3. Generate JWT
        const token = generateToken(user.id);

        return res.json({
            message: "Apple login success",
            token,
            user
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Apple login failed" });
    }
};

