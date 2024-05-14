import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmploye = () => {
  const [formData, setFormData] = useState({});
  const nav = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const ajouterUser = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("cin", formData.cin);
      formDataToSend.append("Date_Début_travail", formData.Date_Début_travail);
      formDataToSend.append("salaries", formData.salaries);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("image", formData.image);

      await axios.post("http://localhost:8000/api/users", formDataToSend, {
        withCredentials: true,
        withXSRFToken: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      nav("/employees");
    } catch (error) {
      console.log("Error :(", error);
      console.log("the submitted form that caused the error :", formData);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={ajouterUser}
        encType="multipart/form-data"
        className="flex flex-col gap-6 w-[1450px] border border-gray-300 rounded-md p-6"
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="name">
            Nom complet
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, name: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="text"
            id="name"
            name="name"
            placeholder="Nom complet..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="image">
            Image (optionnel)
          </label>
          <input
            onChange={handleImageChange}
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            placeholder="Image (optionnel)..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="cin">
            Cin
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, cin: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="text"
            id="cin"
            name="cin"
            placeholder="Cin..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="Date_Début_travail">
            Date de début de travail
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({
                ...prev,
                Date_Début_travail: input.target.value,
              }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="date"
            id="Date_Début_travail"
            name="Date_Début_travail"
            placeholder="Date de début de travail..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="salaries">
            Salaire
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, salaries: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="text"
            id="salaries"
            name="salaries"
            placeholder="Salaire..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="email">
            Email
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, email: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="password">
            Mot de passe
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, password: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe..."
          />
        </div>
        <div className="">
          <button
            className="w-full px-8 py-2 rounded-lg bg-blue-500 text-white text-base"
            type="submit"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmploye;
 