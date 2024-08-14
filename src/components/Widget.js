import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/actions";
import { DeleteOutlined } from "@ant-design/icons";

function Widget({ category, widget }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center mb-3 bg-white shadow-md rounded-lg justify-between">
      <div className="p-4 rounded-lg flex items-center">
        <div className="flex items-center justify-center gap-3 w-52">
          <p className="m-2 text-gray-800 font-semibold">
            <h4>Name-{widget.name}</h4>
            <h6>Text-{widget.text}</h6>
          </p>
          <button
            onClick={() => dispatch(removeWidget(category, widget.id))}
            className="bg-red-400 hover:bg-red-700 text-white font-bold p-2 rounded inline-flex items-center"
          >
            <DeleteOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Widget;
