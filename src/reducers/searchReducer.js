import API1 from "../API/CONTENTLISTINGPAGE-PAGE1.json";
import API2 from "../API/CONTENTLISTINGPAGE-PAGE2.json";
import API3 from "../API/CONTENTLISTINGPAGE-PAGE3.json";

const initialState = {
  searchInitiated: false,
  searchValues: "",
  filteredPosters: [],
};

const onSearchHandler = (state = initialState, action) => {
  const posterContentsOne = API1.page["content-items"].content;
  const posterContentsTwo = API2.page["content-items"].content;
  const posterContentsThree = API3.page["content-items"].content;
  const posterContents = [
    ...posterContentsOne,
    ...posterContentsTwo,
    ...posterContentsThree,
  ];
  switch (action.type) {
    case "ON_SEARCH":
      state = {
        ...state,
        searchInitiated: true,
      };
      return {
        ...state,
      };
    case "OFF_SEARCH":
      state = {
        ...state,
        searchInitiated: false,
      };
      return {
        ...state,
      };
    case "ON_SEARCH_HANDLER":
      let searchInput = action.searchValues.toLowerCase();
      let filterPosters = [];
      if (!!searchInput) {
        filterPosters = posterContents.filter((posters) => {
          return posters.name.toLocaleLowerCase().includes(searchInput)
            ? posters
            : null;
        });
      }
      return {
        ...state,
        searchValues: searchInput,
        filteredPosters: filterPosters,
      };

    default:
      return {
        ...state,
      };
  }
};

export default onSearchHandler;
