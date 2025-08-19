export default function App() {
  const DisplayCardBerita = () => {
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://i.ytimg.com/vi/G31setbrPNU/maxresdefault.jpg"
            alt="Berita 1"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">Prabowo Bicara Penguatan Ekonomi</h2>
          <p className="line-clamp-3">
            Presiden Prabowo Subianto, Menko Perekonomian Airlangga Hartarto dan
            Menteri Keuangan Sri Mulyani Bicara Penguatan Ekonomi Indonesia di
            Tengah Perang Tarif Dagang yang dikeluarkan Presiden Prabowo.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Selengkapnya</button>
          </div>
        </div>
      </div>
    );
  };

  const DisplayCardGaleri = () => {
    return (
      <div className=" bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://i.ytimg.com/vi/G31setbrPNU/maxresdefault.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
      </div>
    );
  };
  return (
    <>
      {/* Navbar */}
      <section className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Beranda</a>
              </li>
              <li>
                <a>Profil Sekolah</a>
              </li>
              <li>
                <a>Ekstrakulikuler</a>
                <ul className="p-2">
                  <li>
                    <a>....</a>
                  </li>
                  <li>
                    <a>....</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Galeri</a>
              </li>
            </ul>
          </div>
          <img
            src="https://lh6.googleusercontent.com/proxy/J0uUgN9rljxwFf9UmlAP1z5COJfb0t5Y5DMSdr5AhvayemVcRVMF8PAbUOEM-4nwGnCZsNm6Vy4X2ppOnx0SKyU"
            alt="logo-smk-4-tasikmalaya"
            className="w-10 h-10 rounded-full"
          />
          <a className="btn btn-ghost text-xl">SMK NEGERI 4 TASIKMALAYA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Profil Sekolah</a>
            </li>
            <li>
              <details>
                <summary>Ekstrakulikuler</summary>
                <ul className="p-2">
                  <li>
                    <a>...</a>
                  </li>
                  <li>
                    <a>...</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Galeri</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Sejarah SMK</a>
        </div>
      </section>
      {/* Berita */}
      <section className="container-berita p-5 mt-5">
        <div className="title-berita">
          <h1 className="text-3xl font-semibold text-center underline">
            Berita Dan Informasi Sekolah
          </h1>
        </div>
        <div className="content-card-berita justify-center flex mt-10 gap-5">
          <div className="card-berita-container grid grid-cols-3 gap-5 justify-center">
            <DisplayCardBerita />
            <DisplayCardBerita />
            <DisplayCardBerita />
            <DisplayCardBerita />
            <DisplayCardBerita />
            <DisplayCardBerita />
          </div>
        </div>
      </section>
      {/* Berita */}
      <section className="container-berita p-5 mt-5">
        <div className="title-berita">
          <h1 className="text-3xl font-semibold text-center underline">
            Galeri Sekolah / Galeri Acara
          </h1>
        </div>
        <div className="content-card-berita items-center flex-col flex mt-10 gap-5">
          <div className="card-berita-container grid grid-cols-3 gap-5 justify-center">
            <DisplayCardGaleri />
            <DisplayCardGaleri />
            <DisplayCardGaleri />
          </div>
          <div className="bottom mt-5">
            <button className="btn btn-primary">Selengkapnya</button>
          </div>
        </div>
      </section>
      {/* Statistik */}
      <section className="container-statistik mt-10">
        <div className="title-statistik">
          <h1 className="text-3xl font-semibold text-center underline">
            Data Statistik
          </h1>
        </div>
        <div className="content-statistik w-full  mt-5">
          <div className="card-statistik-container flex justify-center items-center grid grid-cols-4 gap-5 p-10">
            <div className="statistik-siswa shadow-xl p-5">
              <h1 className="font-bold text-sm">Jumlah Siswa</h1>
              <h1 className="text-4xl font-bold">1500</h1>
            </div>
            <div className="statistik-guru shadow-xl p-5">
              <h1 className="font-bold text-sm">Jumlah Guru</h1>
              <h1 className="text-4xl font-bold">150</h1>
            </div>
            <div className="statistik-jurusan shadow-xl p-5">
              <h1 className="font-bold text-sm">Jumlah Jurusan</h1>
              <h1 className="text-4xl font-bold">5</h1>
            </div>
            <div className="statistik-romble shadow-xl p-5">
              <h1 className="font-bold text-sm">Jumlah Romble</h1>
              <h1 className="text-4xl font-bold">10</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer sm:footer-horizontal rounded-t-md bg-neutral text-neutral-content p-10">
        <aside>
          <img
            src="https://lh6.googleusercontent.com/proxy/J0uUgN9rljxwFf9UmlAP1z5COJfb0t5Y5DMSdr5AhvayemVcRVMF8PAbUOEM-4nwGnCZsNm6Vy4X2ppOnx0SKyU"
            alt="logo-smk-4-tasikmalaya"
            className="w-20 h-20 rounded-full"
          />
          <p className="font-bold">
            Smk Negeri 4 Tasikmalaya
            <br />
            Jl. Depok No. 1, Tasikmalaya
            <br />
            &copy; 2025 - All rights reserved - By PPLG
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
