// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `In this task you will be asked to think about the meaning of different verbs and to give a judgement on it. The task should take no longer than 5 minutes to complete.
            <br />
            <br />
            If you are ready to read the instructions, please go ahead and click the button below.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions_custom = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions',
  text: `Each trial, you will be asked to think about the meaning of a verb relating to change. Your task is to rate how much the verb relates to the two changes depicted by the pictures displayed on the screen, as shown below. In order to do that, you will be given a sliding button which you can click on and drag towards either of the pictures to indicate your judgement.
            <br />
            <br />
            For instance, you will see the verb '<b>to decrease</b>' and decide whether it relates more to the picture on the left, depicting a change in size, or the picture on the right, depicting a change in vertical position. If you think the verb doesn't relate particularly well to either, or if you think it relates equally to both, you can leave the slider right in between both pictures.`,
  buttonText: 'go to trials',
  picture: 'images/instructions_view.png'
},
{
  stimulus_container_generator: function(config, CT) {
    return `<div class='magpie-view'>
                <h1 class='magpie-view-title'>${config.title}</h1>
                <section class="magpie-text-container">
                    <p class="magpie-view-text">${config.text}</p>
                    <div style="text-align: center;" class='magpie-view-stimulus magpie-nodisplay'><img src=${config.picture} style="position:relative; width:615px; height:165px;"></div>
                </section>
            </div>`;
  }
}
);


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyse our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

const slider_rating_custom = magpieViews.view_generator("slider_rating",
{
  trials: 16,
  name: 'slider_rating_custom',
  data: _.shuffle(main_trials.ratingScale)
  // fix_duration: 500,
  // stim_duration: 'space',
  // hook: {
  //     after_stim_shown: myEvents.timeShown,
  //     after_stim_hidden: myEvents.timeHidden
  // }
},
// {
//   stimulus_container_generator: function (config, CT) {
//   return `<div class='magpie-view'>
//               <h1 class='magpie-view-title'>${config.title}</h1>
//               <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
//               <div class='magpie-view-stimulus-container'>
//                   <div class='magpie-view-stimulus magpie-nodisplay'></div>
//               </div>
//           </div>`;
//   }
// },
{ 
  answer_container_generator: function(config, CT) {
    $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
    // const option1 = config.data[CT].optionLeft;
    // const option2 = config.data[CT].optionRight;
    return `<div class='magpie-view-answer-container'>
                <p class='magpie-view-question'>${config.data[CT].question}</p>
                <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture1} style="position:relative; top:60px;"></label>
                <input type='range' id='response' class='magpie-response-slider' min='0' max='100' value='50'/>                
                <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture2} style="position:relative; top:60px;"></label>                
            </div>
            <button id="next" class='magpie-view-button magpie-nodisplay'>Next</button>`;
          }
},
// {
//   handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {
//     $(".magpie-view").append(answer_container_generator(config, CT));

//     // attaches an event listener to the yes / no radio inputs
//     // when an input is selected a response property with a value equal
//     // to the answer is added to the trial object
//     // as well as a readingTimes property with value
//     // $("input[name=answer1]").on("change", function() {
//     //     // const RT = Date.now() - startingTime;
//     //     let trial_data = {
//     //         response_ver: $("input[name=answer1]:checked").val()
//     //     };
//     // });
//     $("input[name=answer2]").on("change", function() {
//       const RT = Date.now() - startingTime;
//       let trial_data = {
//           trial_name: config.name,
//           trial_number: CT + 1,
//           response_ver: $("input[name=answer1]:checked").val(),
//           response_spa: $("input[name=answer2]:checked").val(),
//           RT: RT
//       };

//       trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

//       magpie.trial_data.push(trial_data);
//       magpie.findNextView();
//   });
//   }
// }
);


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
