import React, { Component } from "react";
import "./Jobber.scss"

export default class Jobber extends Component {
    render() {
        return (
            <div className="JobJob" data-ref={this.props.refId}></div>
        );
    }



componentDidMount() {
    (function (d, s, id) { 
    var js; 
    if (d.getElementById(id)) { 
      return; 
    } 
    js = d.createElement(s);
      js.id = id;
      js.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
      js.clienthub_id = "f6f2802e-49e8-477b-b405-8b2b18dded97";
      js.form_url="https://clienthub.getjobber.com/client_hubs/f6f2802e-49e8-477b-b405-8b2b18dded97/public/work_request/embedded_work_request_form"
      d.getElementsByTagName("head")[0].appendChild(js); 
      })(document, "script", "EmbedSocialHashtagScript");
    }
}