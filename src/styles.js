import { css } from 'lit';

const styles = () => {
  return css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--tv-shows-background-color);
    }

    body {
      font-family: 'Roboto', Arial, sans-serif;
    }

    .wrapper {
      width: 100%;
      max-width: 31.25rem;
      margin: 6rem auto;
    }

    .searchBar {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    #searchQueryInput {
      width: 100%;
      height: 2.8rem;
      background: #f5f5f5;
      outline: none;
      border: none;
      border-radius: 1.625rem;
      padding: 0 3.5rem 0 1.5rem;
      font-size: 1rem;
    }

    #searchQuerySubmit {
      width: 3.5rem;
      height: 2.8rem;
      margin-left: -3.5rem;
      background: none;
      border: none;
      outline: none;
    }

    #searchQuerySubmit:hover {
      cursor: pointer;
    }

    .column {
      float: left;
      width: 20%;
      padding: 20px;
      cursor: pointer;
    }

    .row {
      width: 100%;
      margin: auto;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      text-align: left;
      background-color: #f1f1f1;
    }

    @media screen and (max-width: 600px) {
      .column {
        width: 100%;
        display: block;
        margin-bottom: 15px;
      }
    }

    .description {
      font-size: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .title{
      font-size: 15px;
      font-weight: bold;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .rating{
      font-size: 13px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .image{
      box-shadow: 0px -2px 8px 0 rgba(0, 0, 0, 0.2);
      width:100%;
      margin-bottom: -6px;
    }

    .noData{
      margin-top: -200px;
    }
  `;
}

export default styles;