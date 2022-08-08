import ExpiredLogin from "../ExpiredLogin/ExpiredLogin";

const SEC = 1000;
const HR = 3600*SEC;

export default function PrivatePage({ children }) {

    
    const auth = JSON.parse(localStorage.getItem("trackit"));
    
    function renderError() {
        localStorage.clear("trackit");
        return(
            <ExpiredLogin />
        );
    }

    if (!auth) {
      return(renderError());
    }
  
    const now = +new Date();
    const timeLogged = auth.timestamp;

    if (now - timeLogged <= HR) {
        return (
        <>
          {children}
        </>
        );
    } else {
        return(renderError());
    }
}