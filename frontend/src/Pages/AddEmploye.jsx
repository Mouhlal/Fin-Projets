import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmploye = () => {
  const [formData, setFormData] = useState({});
  const nav = useNavigate();
  const ajouterUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/users", formData, {
        withCredentials: true,
        withXSRFToken: true,
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
        className="flex flex-col gap-6 w-[1450px] border border-gray-300 rounded-md p-6"
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="">
            Nom complet
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, name: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="text"
            name="name"
            placeholder="Nom complet..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="">
            Image (optionel)
          </label>
          <input
            onChange={(input) =>
              setFormData(
                (prev) =>
                  input.target.value !== "" && {
                    ...prev,
                    image: input.target.value,
                  }
              )
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="text"
            name="image"
            placeholder="Image (optionel)..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="">
            Cin
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, cin: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="text"
            name="cin"
            placeholder="Cin..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="">
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
            name="Date_Début_travail"
            placeholder="Date de début de travail..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="">
            Salaire
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, salaries: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="text"
            name="salaries"
            placeholder="Salaire..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="">
            Email
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, email: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="email"
            name="email"
            placeholder="Email..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-900" htmlFor="">
            Mot de pass
          </label>
          <input
            onChange={(input) =>
              setFormData((prev) => ({ ...prev, password: input.target.value }))
            }
            className="border border-gray-500 rounded-xl px-4 py-1"
            type="password"
            name="password"
            placeholder="Mot de pass..."
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
