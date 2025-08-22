import { useParams } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

export default function Ekstrakulikuler() {
  const { id } = useParams();
  const data = [
    {
      id: "paskibra",
      foto: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      deskripsi: "loremmmm",
      pembina: "Apasajaa",
      fullID: "Pasukan Pengibar Bendera",
    },
    {},
  ];
  return (
    <MainLayouts
      title={"Ekstrakulikuler"}
      path={
        <>
          <h1 className="font-bold">HOME</h1>
          <h1 className="font-bold text-gray-300">/</h1>
          <h1 className="font-bold text-blue-500 hover:underline cursor-pointer">
            {id.toUpperCase()}
          </h1>
        </>
      }
    >
      <div className="h-35 p-5">
        <h1 className="text-3xl font-bold">{id.toUpperCase()}</h1>
      </div>
    </MainLayouts>
  );
}
