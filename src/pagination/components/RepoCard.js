import React from 'react';
import {Link} from "react-router-dom";
const RepoCard = props => {


  return (

      <tr>
          <td>{props.repo.name}</td>
          <td>{props.repo.owner.login}</td>
          <td>{props.repo.description}</td>
          <td>{props.repo.stargazers_count}</td>
          <td>{new Date(props.repo.created_at).toDateString()}</td>
          <td>{props.repo.language}</td>
          {/*download https://api.github.com/repos/hadley/devtools/zipball/master*/}


          <td>
              <a href={props.repo.html_url}>
                  <i className="fa fa-folder-open-o"/>
                  open
              </a>

          </td>
          <td>
              <Link to={`/repo/${props.repo.owner.login}/${props.repo.name}`}> explore</Link>
          </td>
      </tr>
  )
};



export default RepoCard;
