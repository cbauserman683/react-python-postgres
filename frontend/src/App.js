import React, { useEffect, useState } from "react";
import PageRouter from "./pages/PageRouter";
import Footer from "./components/basicpage/FooterComponent";
import Navigation from "./components/basicpage/NavigationComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    // Function to fetch avatar if token is present
    const blah = async () => {
      if (token) {
        try {
          const response = await fetch(
            "http://localhost:8000/users/me/avatar",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const avatarPath = await response.text();
            const fullUrl = `http://localhost:8000/${avatarPath.trim()}`; // Construct full URL
            setAvatar(fullUrl);
          } else {
            console.error("Failed to fetch avatar");
          }
        } catch (error) {
          console.error("Error fetching avatar:", error);
        }
      } else {
        setAvatar(null);
      }
    };

    const fetchAvatar = async () => {
      try {
        const response = await fetch("http://localhost:8000/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAvatar(`http://localhost:8000/avatars/${data.id}`);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchAvatar();
  }, [token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div className="App">
      <Navigation token={token} avatar={avatar} />

      <PageRouter token={token} setToken={setToken} />

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
