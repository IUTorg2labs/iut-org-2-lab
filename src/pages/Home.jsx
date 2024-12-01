import React from 'react';
import { Link } from 'react-router-dom';
import compounds from '../compounds.json';
import '../Home.css';

const Home = () => (
  <div className="container text-center py-5 ">
    {/* Page Title */}
    <header className="mb-4">
      <h1 className="display-4 fw-bold page-title">Org2Labs Compounds</h1>
    </header>

    {/* Compounds List */}
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {compounds.map((compound) => (
        <div className="col" key={compound.id}>
          <Link
            to={`/compound/${compound.id}`}
            className="text-decoration-none"
          >
            <div className="card h-100 border-primary shadow-sm">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-dark fw-bold">
                  {compound.name}
                </h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>

    {/* Footer */}
    <footer className="mt-5">
      <p className="text-muted">
        <small>
          O**AIsnatcher & AmGhadre &#169; {new Date().getFullYear()}
        </small>
      </p>
    </footer>
  </div>
);

export default Home;
