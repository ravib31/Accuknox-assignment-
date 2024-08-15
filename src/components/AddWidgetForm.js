import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addWidget } from "../redux/actions";

function AddWidgetForm() {
  const [category, setCategory] = useState("CSPM");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWidget(category, { name, text }));
    setCategory("CSPM");
    setName("");
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Add Widget</h3>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="CSPM">CSPM</option>
          <option value="CWPP">CWPP</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Widget Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Widget Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Widget Text</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Widget Text"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Widget
      </button>
    </form>
  );
}

export default AddWidgetForm;
