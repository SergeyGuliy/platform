<template>
  <div class="course-open__wrapper pass-test">
    <div class="test-number">
      <div class="test-number-text"><span>Тест 1: Using the Exercise Files</span></div>
      <div class="test-number-button">
        <button>
          <svg class="svg-icon close">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="learn-course__back">
      <button>
        <svg class="svg-icon arrow-back">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-back"></use></svg
        ><span>Learn Figma - UI/UX Design Essential Training</span>
      </button>
    </div>
    <div class="course-open__content-wrapper">
      <div class="course-open__content">
        <div class="course-test__content">
          <div class="course-test__content-wrapper">
            <div class="course-test__content-title">Using the Exercise Files</div>
            <div class="course-test__content-subtitle">Тест 1 | 3 вопроса</div>
            <div class="course-test__content-text">Ответьте на вопросы, для лучшего усвоения материала</div>
            <div class="course-test__buttons">
              <button class="btn">Начать тест</button>
              <button class="all-btn third-btn">Пропустить тест</button>
            </div>
          </div>
        </div>
        <div class="open__content-tabs-wrapper learning-platform">
          <div class="learn-content-tabs">
            <ul class="content-tabs-nav">
              <li>
                <a href="javascript://" onclick="openBlock(event, 'block1')" class="tabs-link tab-visible current-link"
                  >Учеб11ный план</a
                >
              </li>
              <li>
                <a href="javascript://" onclick="openBlock(event, 'block2')" class="tabs-link tabs-link2"
                  >Описание и ресурсы</a
                >
              </li>
              <li>
                <a href="javascript://" onclick="openBlock(event, 'block3')" class="tabs-link tabs-link3">О курсе</a>
              </li>
              <li>
                <a href="javascript://" onclick="openBlock(event, 'block4')" class="tabs-link tabs-link4"
                  >Комментарии</a
                >
              </li>
            </ul>
          </div>
          <div id="block1" class="learn-courses block">
            <div class="learn-plan-small tab-visible">
              <div class="learn-course__content-text">
                <h5>Учебный план</h5>
              </div>
              <div class="curriculum__body">
                <div class="curriculum__list">
                  <div class="curriculum__item">
                    <div class="curriculum__item-title">
                      <div class="theme-courses">Introduction to the Course</div>
                      <svg class="svg-icon arrow-down">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                      </svg>
                    </div>
                    <div class="curriculum__item-content">
                      <div class="lessons studied">
                        <div class="number-lessons">1</div>
                        <div class="theme-lessons">
                          Introduction to the Course<br /><span>Article - 02:36 min.</span>
                        </div>
                        <svg class="svg-icon icon-load">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                        </svg>
                      </div>
                      <div class="lessons">
                        <div class="number-lessons">2</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon ok-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                        </svg>
                      </div>
                      <div class="lessons">
                        <div class="number-lessons">3</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="curriculum__item">
                    <div class="curriculum__item-title">
                      <div class="theme-courses">Инструменты Figma</div>
                      <svg class="svg-icon arrow-down">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                      </svg>
                    </div>
                    <div class="curriculum__item-content">
                      <div class="lessons">
                        <div class="number-lessons">1</div>
                        <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon ok-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                        </svg>
                      </div>
                      <div class="lessons studied">
                        <div class="number-lessons">2</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon icon-load">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                        </svg>
                      </div>
                      <div class="lessons">
                        <div class="number-lessons">3</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="curriculum__item">
                    <div class="curriculum__item-title">
                      <div class="theme-courses">Инструменты Figma</div>
                      <svg class="svg-icon arrow-down">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                      </svg>
                    </div>
                    <div class="curriculum__item-content">
                      <div class="lessons">
                        <div class="number-lessons">1</div>
                        <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon ok-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                        </svg>
                      </div>
                      <div class="lessons studied">
                        <div class="number-lessons">2</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon icon-load">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                        </svg>
                      </div>
                      <div class="lessons">
                        <div class="number-lessons">3</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="curriculum__item">
                    <div class="curriculum__item-title">
                      <div class="theme-courses">Инструменты Figma</div>
                      <svg class="svg-icon arrow-down">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                      </svg>
                    </div>
                    <div class="curriculum__item-content">
                      <div class="lessons">
                        <div class="number-lessons">1</div>
                        <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon ok-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                        </svg>
                      </div>
                      <div class="lessons studied">
                        <div class="number-lessons">2</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon icon-load">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                        </svg>
                      </div>
                      <div class="lessons">
                        <div class="number-lessons">3</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="curriculum__item">
                    <div class="curriculum__item-title">
                      <div class="theme-courses">Инструменты Figma</div>
                      <svg class="svg-icon arrow-down">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                      </svg>
                    </div>
                    <div class="curriculum__item-content">
                      <div class="lessons">
                        <div class="number-lessons">1</div>
                        <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon ok-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                        </svg>
                      </div>
                      <div class="lessons studied">
                        <div class="number-lessons">2</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon icon-load">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                        </svg>
                      </div>
                      <div class="lessons">
                        <div class="number-lessons">3</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="curriculum__item">
                    <div class="curriculum__item-title">
                      <div class="theme-courses">Инструменты Figma</div>
                      <svg class="svg-icon arrow-down">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                      </svg>
                    </div>
                    <div class="curriculum__item-content">
                      <div class="lessons">
                        <div class="number-lessons">1</div>
                        <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon ok-yellow">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                        </svg>
                      </div>
                      <div class="lessons studied">
                        <div class="number-lessons">2</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                        <svg class="svg-icon icon-load">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                        </svg>
                      </div>
                      <div class="lessons">
                        <div class="number-lessons">3</div>
                        <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="block2" class="learn-courses block">
            <div class="learn-course__content-text">
              <h5>Introduction to the Course</h5>
              <div class="content-text__answer mt20">
                <p>
                  This class is suitable for users of all levels. Beginners who have not used the software before will
                  be able to follow along. Intermediate to advanced users will be able to learn about or expand their
                  knowledge of how to make looping scenes in Figma.
                </p>
              </div>
              <div class="open-course__downloads">
                <button class="download-task">
                  platforma test task.fig
                  <svg class="svg-icon icon-download">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-download"></use>
                  </svg>
                </button>
              </div>
              <div class="open-course__downloads">
                <button class="download-figma">
                  figma.com
                  <svg class="svg-icon icon-link">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-link"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="block3" class="learn-courses block">
            <div class="learn-course__content-wrapper">
              <div class="learn-course__content">
                <div class="learn-course__header-text">
                  <div class="learn-course__header-text-title">Learn Figma - UI/UX Design Essential Training</div>
                  <div class="learn-course__header-text-subtitle">
                    Learn how to design a beautiful and engaging mobile app with Figma. Learn-by-doing approach.
                  </div>
                  <div class="learn-course__header-text-info">
                    <div class="learn-course__header-text-info-item">
                      <svg class="svg-icon icon-folder">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-folder"></use></svg
                      >Design
                    </div>
                    <div class="learn-course__header-text-info-item">
                      <svg class="svg-icon icon-setting">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-setting"></use></svg
                      >For all levels
                    </div>
                    <div class="learn-course__header-text-info-item">
                      <svg class="svg-icon icon-language">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-language"></use></svg
                      >Russian
                    </div>
                  </div>
                </div>
                <div class="learn-course__content-text">
                  <h5>Что мы будем изучать курсе?</h5>
                  <div class="content-text__answer">
                    <div class="content-text__answer-item">
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use></svg
                      >You will have a fully interactive design and prototype at the end of this course
                    </div>
                    <div class="content-text__answer-item">
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use></svg
                      >Design Websites
                    </div>
                    <div class="content-text__answer-item">
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use></svg
                      >You will learn how to reuse design elements for future projects
                    </div>
                    <div class="content-text__answer-item">
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use></svg
                      >Design mobile and desktop apps
                    </div>
                  </div>
                </div>
                <div class="learn-course__content-text">
                  <h5>Описание</h5>
                  <div class="content-text__answer mt20">
                    <p>
                      Figma is a very powerful application that runs online. There are virtually no platform boundaries
                      when it comes to using figma because you can design within a web browser or using their desktop
                      application made for windows and macs. Figma is similar to Sketch and Adobe XD but is the more
                      powerful of the three when it comes to team collaboration and responsive, fast paced design.
                    </p>
                    <p>
                      This course will cover user interface designing using the powerful tools within Figma. In the
                      first section, I'll cover the Figma interface and where you can find powerful tools like
                      constraints to make your designs responsive, and components to build a library of design elements
                      to use throughout your projects. I'll also go over real-time team collaboration and how you can
                      use figma to work closely with others in the same project.
                    </p>
                    <p>
                      Later on I will guide you through designing and prototyping a "Chef's Recipes" App which will
                      include multiple artboards, custom icon designs, editing images and text, and everything else you
                      need to create a polished realistic design.
                    </p>
                    <p>
                      Please join me as a beginner in design or as a seasoned UI/UX designer wanting to switch from
                      other tools like Sketch or Adobe XD<br /><br /><span>Who this course is for:</span><br />
                    </p>
                    • User Interface designers<br />
                    • Web Designers<br />
                    • Graphic Designers<br />
                    • UX Designers<br />
                    • Beginners looking to get into the UI/UX field
                  </div>
                  <a href="#" class="yellow-link mob">Читать все описание</a>
                </div>
                <div class="learn-course__content-text">
                  <h5>Требования</h5>
                  <div class="content-text__answer">
                    <div class="content-text__answer-item">
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use></svg
                      >You should know your way around computer basics
                    </div>
                    <div class="content-text__answer-item">
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use></svg
                      >Internet Access
                    </div>
                  </div>
                </div>
                <div class="learn-course__content-text">
                  <h5>
                    Автор курса<span><a href="#" class="yellow-link mob">Смотреть профиль</a></span>
                  </h5>
                  <div class="course-autor">
                    <div class="course-autor__photo"><img src="./img/users-photo.png" alt="" /></div>
                    <div class="course-autor__about">
                      <div class="course-autor__info">
                        <div class="course-autor__info-head">
                          <div class="course-autor__name">
                            <h3>Roman Budzak</h3>
                            <div class="course-autor__grade">
                              <svg class="svg-icon star-yellow">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-yellow"></use></svg
                              ><span>4.8</span>
                            </div>
                          </div>
                          <div class="course-autor__position">Lead UI/UX designer at Cieden</div>
                        </div>
                        <div class="course-autor__description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <a href="#" class="yellow-link desk">Смотреть профиль</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="learn-course__content-text">
                  <h5>Отзывы студентов</h5>
                  <div class="course__rating">
                    <div class="course__rating-all">
                      <div class="course__rating-all-assessment">4,7</div>
                      <div class="course__rating-all-stars">
                        <span>
                          <svg class="svg-icon star-yellow">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-yellow"></use></svg></span
                        ><span>
                          <svg class="svg-icon star-yellow">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-yellow"></use></svg></span
                        ><span>
                          <svg class="svg-icon star-yellow">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-yellow"></use></svg></span
                        ><span>
                          <svg class="svg-icon star-yellow">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-yellow"></use></svg></span
                        ><span>
                          <svg class="svg-icon star-half">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-half"></use></svg></span
                        ><span>средний рейтинг</span>
                      </div>
                    </div>
                    <div class="course__rating-line-stars">
                      <div class="course__rating-progress-stars">
                        <div class="course__rating-progress">
                          <span><i style="width: 70%;"></i></span>
                        </div>
                        <div class="course__rating-stars">
                          <span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>70%</span>
                        </div>
                      </div>
                      <div class="course__rating-progress-stars">
                        <div class="course__rating-progress">
                          <span><i style="width: 25%;"></i></span>
                        </div>
                        <div class="course__rating-stars">
                          <span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>25%</span>
                        </div>
                      </div>
                      <div class="course__rating-progress-stars">
                        <div class="course__rating-progress">
                          <span><i style="width: 4%;"></i></span>
                        </div>
                        <div class="course__rating-stars">
                          <span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>4%</span>
                        </div>
                      </div>
                      <div class="course__rating-progress-stars">
                        <div class="course__rating-progress">
                          <span><i style="width: 1%;"></i></span>
                        </div>
                        <div class="course__rating-stars">
                          <span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>1%</span>
                        </div>
                      </div>
                      <div class="course__rating-progress-stars">
                        <div class="course__rating-progress">
                          <span><i style="width: 1%;"></i></span>
                        </div>
                        <div class="course__rating-stars">
                          <span>
                            <svg class="svg-icon star-yellow">
                              <use
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="#star-yellow"
                              ></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>
                            <svg class="svg-icon star-grey">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-grey"></use></svg></span
                          ><span>1%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="block4" class="learn-courses block">
            <div class="learn-course__content-wrapper">
              <div class="learn-course__content-text">
                <h5>Комментарии</h5>
              </div>
            </div>
          </div>
          <div class="learn-plan-small learn-plan-small-wrapper desk2">
            <div class="learn-course__content-text">
              <h5>Учебный план</h5>
            </div>
            <div class="curriculum__body">
              <div class="curriculum__list">
                <div class="curriculum__item">
                  <div class="curriculum__item-title">
                    <div class="theme-courses">Introduction to the Course</div>
                    <svg class="svg-icon arrow-down">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                    </svg>
                  </div>
                  <div class="curriculum__item-content">
                    <div class="lessons">
                      <div class="number-lessons">1</div>
                      <div class="theme-lessons">Introduction to the Course<br /><span>Article - 02:36 min.</span></div>
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                      </svg>
                    </div>
                    <div class="lessons">
                      <div class="number-lessons">2</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                      </svg>
                    </div>
                    <div class="lessons studied">
                      <div class="number-lessons">3</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Test 1 | 3 questions</span></div>
                      <svg class="svg-icon icon-load">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="curriculum__item">
                  <div class="curriculum__item-title">
                    <div class="theme-courses">Инструменты Figma</div>
                    <svg class="svg-icon arrow-down">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                    </svg>
                  </div>
                  <div class="curriculum__item-content">
                    <div class="lessons">
                      <div class="number-lessons">1</div>
                      <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                      </svg>
                    </div>
                    <div class="lessons studied">
                      <div class="number-lessons">2</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon icon-load">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                      </svg>
                    </div>
                    <div class="lessons">
                      <div class="number-lessons">3</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                    </div>
                  </div>
                </div>
                <div class="curriculum__item">
                  <div class="curriculum__item-title">
                    <div class="theme-courses">Инструменты Figma</div>
                    <svg class="svg-icon arrow-down">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                    </svg>
                  </div>
                  <div class="curriculum__item-content">
                    <div class="lessons">
                      <div class="number-lessons">1</div>
                      <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                      </svg>
                    </div>
                    <div class="lessons studied">
                      <div class="number-lessons">2</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon icon-load">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                      </svg>
                    </div>
                    <div class="lessons">
                      <div class="number-lessons">3</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                    </div>
                  </div>
                </div>
                <div class="curriculum__item">
                  <div class="curriculum__item-title">
                    <div class="theme-courses">Инструменты Figma</div>
                    <svg class="svg-icon arrow-down">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                    </svg>
                  </div>
                  <div class="curriculum__item-content">
                    <div class="lessons">
                      <div class="number-lessons">1</div>
                      <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                      </svg>
                    </div>
                    <div class="lessons studied">
                      <div class="number-lessons">2</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon icon-load">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                      </svg>
                    </div>
                    <div class="lessons">
                      <div class="number-lessons">3</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                    </div>
                  </div>
                </div>
                <div class="curriculum__item">
                  <div class="curriculum__item-title">
                    <div class="theme-courses">Инструменты Figma</div>
                    <svg class="svg-icon arrow-down">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                    </svg>
                  </div>
                  <div class="curriculum__item-content">
                    <div class="lessons">
                      <div class="number-lessons">1</div>
                      <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                      </svg>
                    </div>
                    <div class="lessons studied">
                      <div class="number-lessons">2</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon icon-load">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                      </svg>
                    </div>
                    <div class="lessons">
                      <div class="number-lessons">3</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                    </div>
                  </div>
                </div>
                <div class="curriculum__item">
                  <div class="curriculum__item-title">
                    <div class="theme-courses">Инструменты Figma</div>
                    <svg class="svg-icon arrow-down">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                    </svg>
                  </div>
                  <div class="curriculum__item-content">
                    <div class="lessons">
                      <div class="number-lessons">1</div>
                      <div class="theme-lessons">Introduction to the Course<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon ok-yellow">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                      </svg>
                    </div>
                    <div class="lessons studied">
                      <div class="number-lessons">2</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                      <svg class="svg-icon icon-load">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                      </svg>
                    </div>
                    <div class="lessons">
                      <div class="number-lessons">3</div>
                      <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
