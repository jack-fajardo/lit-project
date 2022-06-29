import { LitElement, html, css } from 'lit';
import styles from './styles';

export class TvShows extends LitElement {
  static get styles() {
    return css`${styles()}`
  }

  static get properties() {
    return {
      response: { type: Array },
      searchInput: { type: String }
    };
  }

  fetchTvShows(searchInput) {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
      .then((r) => r.json())
      .then((r) => {
        this.response = r;
      });
  }

  filterSummary(paragraph) {
    if (paragraph) {
      return paragraph.replace(/<\/?[^>]+(>|$)/g, "")
    }

    return html`No Description... <br><br><br>`
  }

  filterRating(rating) {
    if (rating) {
      return rating
    }

    return "No rating yet"
  }

  filterImage(show) {
    try {
      const imageUrl = show.image.medium
      if (imageUrl) {
        return imageUrl
      }
    }
    catch {
      return "/assets/empty.jpg"
    }
  }

  constructor() {
    super();
    this.fetchTvShows("A")
    this.response = [];
    this.searchInput = ""
  }

  render() {
    const { response } = this;

    return html`
      <div class="wrapper">
        <div class="searchBar">
          <input
            id="searchQueryInput"
            type="text"
            name="searchQueryInput"
            placeholder="Search TV Shows"
            @keyup=${(e) => {
              this.fetchTvShows(e.target.value)
            }}
            value="${this.searchInput}"
          />
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="row">
        ${response.length !== 0
          ? response.map((item) => html`
              <div class="column">
                  <img src="${this.filterImage(item.show)}" class="image">
                  <div class="card">
                    <div class="title">${item.show.name}</div>
                    <div class="rating">Rating: ${this.filterRating(item.show.rating.average)}</div>
                    <p class="description">${this.filterSummary(item.show.summary)}</p>
                  </div>
              </div>
            `)
          : html `<h3 class="noData">Nothing to see here...</h3>`
        }
      </div>
    `;
  }
}
