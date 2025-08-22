import { useNavigate } from "react-router-dom";

export default function MainNavbar() {
  const navigate = useNavigate();
  function navigasiTo(tujuan) {
    navigate(tujuan);
  }
  return (
    <>
      {/* Navbar */}
      <section className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
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
              <a onClick={() => navigasiTo("/")}>Beranda</a>
            </li>
            <li>
              <a onClick={() => navigasiTo("/profile-sekolah")}>
                Profil Sekolah
              </a>
            </li>
            <li>
              <details>
                <summary>Ekstrakulikuler</summary>
                <ul className="p-2 w-96 flex items-center justify-between">
                  <li>
                    <a onClick={() => navigasiTo("/ekstrakulikuler/paskibra")}>
                      PASKIBRA
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigasiTo("/ekstrakulikuler/pmr")}>
                      PMR
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigasiTo("/ekstrakulikuler/pks")}>
                      PKS
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigasiTo("/ekstrakulikuler/pramuka")}>
                      PRAMUKA
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigasiTo("/ekstrakulikuler/pd")}>PD</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a onClick={() => navigasiTo("/galeri")}>Galeri</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            onClick={() => navigasiTo("/profile-sekolah")}
            className="btn btn-primary"
          >
            Sejarah SMK
          </a>
        </div>
      </section>
    </>
  );
}
