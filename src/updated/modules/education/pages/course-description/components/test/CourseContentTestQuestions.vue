<template>
  <div class="course-test__content">
    <div class="course-test__content-wrapper">
      <div class="course-test__content-questions">
        <div class="course-test__content-question">
          <div class="course-test__content-question-number">Вопрос 1:</div>
          <div class="course-test__content-question-text">
            What's the best way to get your designs reviewed or your questions answered?
          </div>
        </div>
        <div class="course-test__content-answers">
          <div class="radio-checker-box">
            <ul class="list">
              <li>
                <div class="radio-box">
                  <label class="check-answer"> <input type="radio" name="radio" /><span>Q&A</span> </label>
                </div>
              </li>
              <li>
                <div class="radio-box">
                  <label class="check-answer"> <input type="radio" name="radio" /><span>Personal Message</span> </label>
                </div>
              </li>
              <li>
                <div class="radio-box">
                  <label class="check-answer"> <input type="radio" name="radio" /><span>Discord Chat</span> </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="course-test__buttons-block">
      <div class="course-test__buttons-block-counter">Вопрос 1 из 3</div>
      <div class="course-test__buttons-block-buttons">
        <button class="all-btn third-btn test-btn">Пропустить</button>
        <button class="btn disabled-btn">Проверить ответ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped></style>
