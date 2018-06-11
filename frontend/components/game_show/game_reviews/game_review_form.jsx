import React from 'react';
import { withRouter } from 'react-router-dom';
import { emptyStar, fullStar } from '../../logo';

class GameReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.state = this.props.review;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  updateRating(num) {
    return (e) => {
      this.setState({rating: num});
      const starElements = document.getElementsByClassName('star');
      const allStars = Array.prototype.slice.call(starElements);
      const checkedStars = allStars.slice(0, num);

      allStars.forEach((star) => {
        star.classList.remove('star-checked');
      });
      checkedStars.forEach((star) => {
        star.classList.add('star-checked');
      });
    };
  }

  render() {
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit}>



          <div className="review-form-rating">
            <span className="star" onClick={this.updateRating(1)}>{emptyStar}</span>
            <span className="star" onClick={this.updateRating(2)}>{emptyStar}</span>
            <span className="star" onClick={this.updateRating(3)}>{emptyStar}</span>
            <span className="star" onClick={this.updateRating(4)}>{emptyStar}</span>
            <span className="star" onClick={this.updateRating(5)}>{emptyStar}</span>
          </div>

          <textarea
            className="review-form-body"
            placeholder="Write a review..."
            value={this.state.body}
            onChange={this.update('body')}
          />

          <input
            className="review-form-button"
            type="submit"
            value={this.props.submitButton} />

        </form>
      </div>
    );
  }
}

export default withRouter(GameReviewForm);
