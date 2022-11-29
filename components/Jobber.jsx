import "./cssComponents/Jobber.scss";
import { Helmet } from "react-helmet";
function Jobber() {
  return (
    <div className="">
      <div className="Background">
        <div className="JobberContainer">

        <div id="f6f2802e-49e8-477b-b405-8b2b18dded97"></div>
       
       <Helmet>
        <link
          rel="stylesheet"
          media="screen"
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        />
        <script
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
          clienthub_id="f6f2802e-49e8-477b-b405-8b2b18dded97"
          form_url="https://clienthub.getjobber.com/client_hubs/f6f2802e-49e8-477b-b405-8b2b18dded97/public/work_request/embedded_work_request_form"
        ></script></Helmet>
      </div>
    </div>
</div>
  );
}

export default Jobber;
