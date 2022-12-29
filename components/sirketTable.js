import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getCompanys } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleChanceAction } from "../redux/reducer";

export default function SirketTables() {
  const { isLoading, isError, data, error } = useQuery("companys", getCompanys);

  if (isLoading) return <div className="text-white font-bold text-center">Şirket Listesi Yükleniyor...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <table className="table-fixed">
      <thead>
        <tr className="bg-gray-800 w-full">
          <th className="px-16 py-2">
            <span className="text-gray-200">Logo</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Şirket Adı</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Şirket Maili</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Vergi No</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Hizmet</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ id, name, logo, email, idNo, type, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChanceAction());
    console.log(visible)
  };
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2">
        <img
          className="border rounded-xl"
          width={75}
          src={logo || "#"}
          alt=""
        />
      </td>
      <td className="px-16 py-2 flex flex-row items-center">
        <span className="text-center ml-2 font-semibold">
          {" "}
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span className="text-center ml-2 font-semibold">
          {email || "Unknown"}s
        </span>
      </td>
      <td className="px-16 py-2">
        <span className="text-center ml-2 font-semibold">
          {idNo || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span className="text-center ml-2 font-semibold">
          {type || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? "bg-green-500" : "bg-rose-500"
            } text-white px-5 py-1 rounded-full`}
          >
            {status || "Unknown"}
          </span>
        </button>{" "}
      </td>
      <td className="px-10 py-3 flex justify-around gap-5">
        <button className="cursor" onClick={onUpdate}>
          <span className="px-1">
            <BiEdit color={"green"} size={25} />
          </span>
        </button>
        <button className="cursor">
          <span className="px-1">
            <BiTrashAlt color={"red"} size={25} />
          </span>
        </button>
      </td>
    </tr>
  );
}
