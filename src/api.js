import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Only use this for development or if you have appropriate security measures in place
});

export async function generateCode(description) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a web developer tasked with creating HTML and CSS code based on descriptions. Provide only the HTML and CSS code, without any explanations or markdown formatting."
        },
        {
          role: "user",
          content: `Generate HTML and CSS code for a website with the following description: ${description}. Wrap the HTML code in <html> tags and the CSS code in <style> tags.`
        }
      ],
      model: "llama-3.1-70b-versatile",
    });
    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error generating code:", error);
    throw error;
  }
}

export async function generateDescription(userInput) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an AI assistant tasked with generating detailed website descriptions based on user input."
        },
        {
          role: "user",
          content: `Generate a detailed description for a website based on this input: ${userInput}`
        }
      ],
      model: "llama-3.1-70b-versatile",
    });
    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error generating description:", error);
    throw error;
  }
}