import ApiError from "../../middleware/errors/customError.js";
import Certificate from "../../models/course/certificate.js";

export const createNewCertificate = async (req, res, next) => {
  const NewCertificate = new Certificate({ ...req.body});
  try {
    const Certificate = await NewCertificate.save();
    res.status(201).json({message : "new Certificate created successfully"});
  } catch (error) {
    next(error);
  }
};

export const getAllCertificates = async (req, res, next) => {
  try {
    const Certificates = await Certificate.find()
    res.status(200).json(Certificates);
  } catch (error) {
    next(error);
  }
};
export const getCertificateById = async (req, res, next) => {
  const { CertificateID } = req.params;
  try {
    const certificate = await Certificate.findById(CertificateID);
    res.status(200).json(certificate);
  } catch (error) {
    next(error);
  }
};
export const updateCertificate = async (req, res, next) => {
  const { CertificateID } = req.params;
  try {
    const certificate = await Certificate.findByIdAndUpdate(CertificateID, req.body, {
      new: true,
    });
    res.status(200).json(certificate);
  }
  catch (error) {
    next(error);
  }
};
export const deleteCertificate = async (req, res, next) => {
  const { CertificateID } = req.params;
  try {
    await Certificate.findByIdAndDelete(CertificateID);
    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (error) {
    next(error);
  }
};
