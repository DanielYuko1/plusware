import { RequestHandler } from "express";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export const handleFormSubmission: RequestHandler = async (req, res) => {
  try {
    const formData: FormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return res.status(400).json({
        success: false,
        message: "Campos requeridos faltantes",
      });
    }

    // Call Google Apps Script
    const GOOGLE_APPS_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxHqElJkXPa1vU1YGVQPxe7WVDRcZy0Y9_BHD1m7BfrbktLDg6KtI-_4jX31O4EVAl5AQ/exec";

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    res.json(result);
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({
      success: false,
      message: "Error al procesar la solicitud",
    });
  }
};
