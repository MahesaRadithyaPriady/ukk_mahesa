import MainLayouts from "./layouts/MainLayouts";

export default function Galeri() {
  const DisplayCardGaleri = ({ gambar, title, deskripsi }) => {
    return (
      <>
        <div className="items-card">
          <div className="card hover:shadow-lg cursor-pointer hover:scale-105 transition-all bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={gambar} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p>{deskripsi}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <MainLayouts
        title={"Galeri"}
        path={
          <>
            <h1 className="font-bold">HOME</h1>
            <h1 className="font-bold text-gray-300">/</h1>
            <h1 className="font-bold text-blue-500 hover:underline cursor-pointer">
              GALERI
            </h1>
          </>
        }
      >
        <div className="grid grid-cols-3 p-5 gap-4">
          <DisplayCardGaleri
            title={"Galeri 1"}
            deskripsi={"Deskripsi Galeri 1"}
            gambar={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR4iHSzni1SM777Ge6Z2CPOzLPl7wBpRwRA&s"
            }
          />
          <DisplayCardGaleri
            title={"Galeri 1"}
            deskripsi={"Deskripsi Galeri 1"}
            gambar={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR4iHSzni1SM777Ge6Z2CPOzLPl7wBpRwRA&s"
            }
          />
          <DisplayCardGaleri
            title={"Galeri 1"}
            deskripsi={"Deskripsi Galeri 1"}
            gambar={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR4iHSzni1SM777Ge6Z2CPOzLPl7wBpRwRA&s"
            }
          />
          <DisplayCardGaleri
            title={"Galeri 1"}
            deskripsi={"Deskripsi Galeri 1"}
            gambar={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR4iHSzni1SM777Ge6Z2CPOzLPl7wBpRwRA&s"
            }
          />
          <DisplayCardGaleri
            title={"Galeri 1"}
            deskripsi={"Deskripsi Galeri 1"}
            gambar={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR4iHSzni1SM777Ge6Z2CPOzLPl7wBpRwRA&s"
            }
          />
          <DisplayCardGaleri
            title={"Galeri 1"}
            deskripsi={"Deskripsi Galeri 1"}
            gambar={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR4iHSzni1SM777Ge6Z2CPOzLPl7wBpRwRA&s"
            }
          />
        </div>
      </MainLayouts>
    </>
  );
}
