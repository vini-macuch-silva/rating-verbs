// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// const answer_container_generators = {
//     rating_scale_custom: function(config, CT) {
//         return `<p class='magpie-view-question'>${config.data[CT].question_ver}</p>
//                 <div class='magpie-view-answer-container'>
//                     <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
//                     <label for="1" class='magpie-response-rating'>1</label>
//                     <input type="radio" name="answer" id="1" value="1" />
//                     <label for="2" class='magpie-response-rating'>2</label>
//                     <input type="radio" name="answer" id="2" value="2" />
//                     <label for="3" class='magpie-response-rating'>3</label>
//                     <input type="radio" name="answer" id="3" value="3" />
//                     <label for="4" class='magpie-response-rating'>4</label>
//                     <input type="radio" name="answer" id="4" value="4" />
//                     <label for="5" class='magpie-response-rating'>5</label>
//                     <input type="radio" name="answer" id="5" value="5" />
//                     <label for="6" class='magpie-response-rating'>6</label>
//                     <input type="radio" name="answer" id="6" value="6" />
//                     <label for="7" class='magpie-response-rating'>7</label>
//                     <input type="radio" name="answer" id="7" value="7" />
//                     <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
//                 </div>
//                 <p class='magpie-view-question'>${config.data[CT].question_spa}</p>
//                 <div class='magpie-view-answer-container'>
//                     <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
//                     <label for="1" class='magpie-response-rating'>1</label>
//                     <input type="radio" name="answer" id="1" value="1" />
//                     <label for="2" class='magpie-response-rating'>2</label>
//                     <input type="radio" name="answer" id="2" value="2" />
//                     <label for="3" class='magpie-response-rating'>3</label>
//                     <input type="radio" name="answer" id="3" value="3" />
//                     <label for="4" class='magpie-response-rating'>4</label>
//                     <input type="radio" name="answer" id="4" value="4" />
//                     <label for="5" class='magpie-response-rating'>5</label>
//                     <input type="radio" name="answer" id="5" value="5" />
//                     <label for="6" class='magpie-response-rating'>6</label>
//                     <input type="radio" name="answer" id="6" value="6" />
//                     <label for="7" class='magpie-response-rating'>7</label>
//                     <input type="radio" name="answer" id="7" value="7" />
//                     <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
//                 </div>`;
//     }
// }