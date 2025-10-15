import React from "react";

export default function Header(props: { header1: string; header2?: string }) {
  const headersTrated = {
    h1: props.header1[0].toUpperCase() + props.header1.slice(1),
    h2: props.header2
      ? props.header2[0].toUpperCase() + props.header2.slice(1)
      : undefined,
  };
  return (
    <>
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 animate__animated animate__fadeInDown">
            {headersTrated.h1}
          </h1>
          {props.header2 ? (
            <p className="lead animate__animated animate__fadeInUp">
              {headersTrated.h2}
            </p>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
}
