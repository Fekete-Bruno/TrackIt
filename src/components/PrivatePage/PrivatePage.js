import logo from "../../images/TrackIt-Logo.png";

const SEC = 1000;
const HR = 3600*SEC;

function renderError() {
    localStorage.clear("trackit");
    return (
        <>
            <img src={logo} alt="TrackIt Logo" />
            <h1>SEU LOGIN EXPIROU</h1>
        </>
    );
}

export default function PrivatePage({ children }) {
  
    const auth = JSON.parse(localStorage.getItem("trackit"));
    
    if (!auth) {
      return renderError();
    }
  
    const now = +new Date();
    const timeLogged = auth.timestamp;
    console.log(now-timeLogged);
    console.log(HR);

    if (now - timeLogged <= HR) {
      return (
        <>
          {children}
        </>
      );
    } else {
      renderError();
    }
  }