const backendUrl = "http://localhost:8000";

// Function to check if the backend is up
const isBackendUp = async () => {
  try {
    const response = await fetch(`${backendUrl}/health`);
    if (response.ok) {
      const data = await response.json();
      return data.status === "UP";
    }
    return false;
  } catch (error) {
    return false;
  }
};

// Wrapper function to safely call API
export const safeApiCall = async (apiCall, ...params) => {
  const backendStatus = await isBackendUp();
  if (backendStatus) {
    try {
      const response = await apiCall(...params);
      return response;
    } catch (error) {
      console.error("API call failed:", error);
      return null; // Handle the error gracefully
    }
  } else {
    console.warn("Backend is not running.");
    return null; // Handle the scenario where backend is not running
  }
};
