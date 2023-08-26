import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cloudinary from "../cloudinaryConfig.js";

import {
  getAll,
  getById,
  post,
  update,
  remove,
} from "../controllers/controllerCoffee.js";

export const getCoffees = async (req, res) => {
  try {
    let coffees = await getAll(req.query);
    res.status(200).json(coffees);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};

export const getCoffeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const coffee = await getById(id);
    res.status(200).json(coffee);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};

export const postCoffee = async (req, res) => {
  try {
    const status = await post(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

export const postUploadCoffeAsset = async (req, res) => {
  try {
    const { file, fname } = req.body;
    // Directorio donde se guardarán los archivos
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const uploadDir = path.join(__dirname, "../uploads");

    // Crear el directorio de subida si no existe
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    // Decodificar el archivo en base64 y obtener la extensión
    const matches = file.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    const fileExtension = matches[1].split("/")[1];
    const base64Data = matches[2];
    // Generar un nombre de archivo único
    const filename = `${fname.split(".")[0]}.${fileExtension}`;
    // Crear y escribir el archivo en el sistema de archivos
    fs.writeFileSync(path.join(uploadDir, filename), base64Data, "base64");
    const { secure_url } = await cloudinary.uploader.upload(
      path.join(uploadDir, filename)
    );
    res.json({ message: "Archivo subido exitosamente", imageUrl: secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al subir el archivo" });
  }
};

export const updateCoffee = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await update(id, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

export const deleteCoffee = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWine = await remove(id);
    res.status(200).json(deleteWine);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

