import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SearchBox from './components/searchContainer/SearchBox';

import Enzyme, { shallow,mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {render, fireEvent, cleanup} from '@testing-library/react';


Enzyme.configure({ adapter: new Adapter() });
const res = {"page":1,"results":[{"adult":false,"backdrop_path":null,"genre_ids":[10749,35],"id":496698,"original_language":"te","original_title":"Hello Brother","overview":"Hello Brother is a 1994 Telugu action-comedy film, produced by K. L. Narayana on Sri Durga Arts banner, presented by S. Gopal Reddy and directed by E V V Satyanarayana. Starring Akkineni Nagarjuna, Ramya Krishna, Soundarya in lead roles and music composed by Raj-Koti. The film was a Blockbuster at the Box Office. It was later remade in Kannada as Cheluva with V. Ravichandran and Hindi as Judwaa with Salman Khan. The film is loosely based on Twin Dragons and borrows plot elements from the Hindi film Kishen Kanhaiya.","popularity":2.262,"poster_path":"/f2BLnilf2ELTA1riVFB7GCr8Qse.jpg","release_date":"1994-04-20","title":"Hello Brother","video":false,"vote_average":5.1,"vote_count":5},{"adult":false,"backdrop_path":"/yh4mY4ko106XKsvgAynpnLcmxXd.jpg","genre_ids":[18],"id":159189,"original_language":"ko","original_title":"안녕, 형아","overview":"Nine-year-old Hani (PARK Ji-Bin) is a troublemaker who isn't afraid of anything. A precocious punk, his school friends are all his underlings, and even his family members are under his control. He especially considers his elder brother, HanByul, who often complains of being sick, his greatest target. Until one fateful day, HanByul collapses at home and is rushed to the emergency room and the worst nightmare for any parents becomes a reality - he is diagnosed with cancer. The film is based on a true story.","popularity":1.889,"poster_path":"/fMpKZfIDGc1OsytX87sBpPFZ2RN.jpg","release_date":"2005-05-27","title":"Hello Brother","video":false,"vote_average":6.2,"vote_count":5},{"adult":false,"backdrop_path":"/j8hzmGVPomKpRH3YagdhQTC0KQx.jpg","genre_ids":[35,10749],"id":39347,"original_language":"hi","original_title":"Hello Brother","overview":"A ghost seeking revenge for his death haunts the man who received his heart in a transplant.","popularity":2.709,"poster_path":"/zeIVLNCZZZuCXUhiPWHxgtuIh9a.jpg","release_date":"1999-09-10","title":"Hello Brother","video":false,"vote_average":5.1,"vote_count":26}],"total_pages":1,"total_results":3}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


