
import {elements, renderLoader, clearLoader} from './views/base';
import Search from './models/Search';
import * as searchView from './views/searchView';
import Recipes from './models/Recipes';

let state = {};

const controlSearch = async () => {

    const query = searchView.getInput();
    if(query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearList();
        renderLoader(elements.searchRes);
        
        await state.search.getResults();
        clearLoader();
        searchView.renderResults(state.search.result);
        
    } 

};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch(); 
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearList();
        searchView.renderResults(state.search.result, goToPage);
    }
})


const r = new Recipes(47746);
r.getRecipes();
// console.log(r);

