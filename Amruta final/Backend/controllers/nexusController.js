import { 
  createNexus as createNexusModel,
  getMyNexus as getMyNexusModel,
  getPublicNexus as getPublicNexusModel,
  getNexusById as getNexusByIdModel,
  updateNexus as updateNexusModel,
  deleteNexus as deleteNexusModel,
  addMember
} from "../models/nexusModel.js";


export const createNexus = async(req, res, next)=> {
  try {
    const { name, type, icon, description, is_public } = req.body;
    const createdBy = req.user.id;

    const nexus = await createNexusModel({
      name,
      type,
      icon,
      description,
      created_by: createdBy,
      is_public
    });

    await addMember(nexus.id, createdBy, 'owner');

    res.status(201).json({ success: true, data: nexus });

  } catch (err) { next(err); }
};


export const getMyNexus = async(req, res, next)=> {
  try {
    const list = await getMyNexusModel(req.user.id);
    res.json({ success: true, data: list });
  } catch (err) { next(err); }
};


export const getPublicNexus = async(req, res, next)=> {
  try {
    const list = await getPublicNexusModel();
    res.json({ success: true, data: list });
  } catch (err) { next(err); }
};


export const getNexusById = async(req, res, next)=> {
  try {
    const { id } = req.params;
    const nexus = await getNexusByIdModel(id);

    if (!nexus)
      return res.status(404).json({ success:false, message:'Nexus not found' });

    res.json({ success:true, data: nexus });

  } catch (err) { next(err); }
};


export const updateNexus = async(req, res, next)=> {
  try {
    const updated = await updateNexusModel(req.params.id, req.body);
    res.json({ success:true, data: updated });
  } catch (err) { next(err); }
};


export const deleteNexus = async(req, res, next)=> {
  try {
    await deleteNexusModel(req.params.id);
    res.json({ success:true, message:'Deleted' });
  } catch (err) { next(err); }
};
