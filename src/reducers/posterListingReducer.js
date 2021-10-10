import API1 from "../API/CONTENTLISTINGPAGE-PAGE1.json";
import API2 from "../API/CONTENTLISTINGPAGE-PAGE2.json";
import API3 from "../API/CONTENTLISTINGPAGE-PAGE3.json";

const initialState = {
  pageDetails: API1.page,
  posters: API1.page["content-items"].content,
  pageSize: parseInt(API1.page["page-size-requested"]),
};

const fetchingData = (state = initialState, action) => {
  let { pageDetails, posters, pageSize } = state;
  switch (action.type) {
    case "LOAD_PAGE_ONE":
      posters = API1.page["content-items"].content;
      pageDetails = API1.page;
      state = {
        posters,
        pageDetails,
        pageSize,
      };
      return {
        ...state,
      };
    case "LOAD_PAGE_TWO":
      posters = posters.concat(API2.page["content-items"].content);
      pageDetails = API2.page;
      pageSize = pageSize + parseInt(API2.page["page-size-requested"]);
      state = {
        posters,
        pageDetails,
        pageSize,
      };
      return {
        ...state,
      };
    case "LOAD_PAGE_THREE":
      posters = posters.concat(API3.page["content-items"].content);
      pageDetails = API3.page;
      state = {
        posters,
        pageDetails,
      };
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default fetchingData;
