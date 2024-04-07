export const uploadController = (req, res) => {
  if (req.file && req.file.path) {
    return res.status(201).json(req.file.path);
  }
  return res.status(400).json("Upload không thành công");
};
