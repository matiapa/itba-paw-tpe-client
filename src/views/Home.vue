<template id="page-top" class="sidebar-toggled">

  <div id="wrapper">

      <Navbar/>

      <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">

              <Header :user="{fullName: 'Test', id: 1}"/>

              <div class="container-fluid">
                  <div class="row">
                      <div class="col-lg-6 mb-4">
                          <div class="card shadow mb-4">

                              <div class="card-header py-3">
                                  <h6 class="font-weight-bold m-0"><div>{{$t('mostRelevantAnnounce')}}</div></h6>
                              </div>

                              <!-- Relevant announcement list -->

                              <ul class="list-group list-group-flush">
                                  <div v-if="announcements.length != 0">
                                      <div v-for="announcement in announcements" :key="announcement.id">
                                          <li class="list-group-item">
                                              <div class="row align-items-center no-gutters">
                                                  <div class="col mr-2">
                                                      <h6 class="mb-0"><strong>{{announcement.title}}</strong></h6>
                                                      <span>{{announcement.summary}}<br></span>
                                                  </div>
                                                  <router-link :to="'/announcements/'+announcement.id" class="btn btn-icon stretched-link" type="button">
                                                      <i class="material-icons">keyboard_arrow_right</i>
                                                  </router-link>
                                              </div>
                                          </li>
                                      </div>
                                  </div>
                                  <div v-else>
                                    <li class="list-group-item">
                                        <div class="row align-items-center no-gutters">
                                            <div class="col mr-2" style="text-align: center;">
                                                <h6 class="mb-0"><strong><div>{{$t('noAnnounces')}}</div></strong></h6>
                                            </div>
                                        </div>
                                    </li>
                                  </div>
                              </ul>

                          </div>
                          <div class="card shadow mb-4">
                              <div class="card-header py-3">
                                  <h6 class="font-weight-bold m-0"><div>{{$t('yourcourses')}}</div></h6>
                              </div>

                              <!-- Relevant courses list -->
                              <ul class="list-group list-group-flush">
                                  <div v-if="courses.length != 0">
                                      <div v-for="course in courses" :key="course.id">
                                          <li class="list-group-item">
                                              <div class="row align-items-center no-gutters">
                                                  <div class="col mr-2">
                                                      <h6 class="mb-0">
                                                          <strong>{{course.name}}</strong>
                                                      </h6>
                                                  </div>
                                                  <router-link to="/courses/${course.id}" class="btn btn-icon stretched-link" type="button">
                                                      <i class="material-icons">keyboard_arrow_right</i>
                                                  </router-link>
                                              </div>
                                          </li>
                                      </div>
                                  </div>
                                  <div v-else>
                                      <li class="list-group-item">
                                          <div class="row align-items-center no-gutters">
                                              <div class="col mr-2" style="text-align: center;">
                                                  <h6 class="mb-0">
                                                      <strong><div>{{$t('noCourses')}}</div></strong>
                                                  </h6>
                                              </div>
                                          </div>
                                      </li>
                                  </div>

                              </ul>

                          </div>
                      </div>

                      <div class="col">
                          <div class="card shadow mb-4">

                              <div class="card-header py-3">
                                  <h6 class="font-weight-bold m-0"><div>{{$t('relevantPolls')}}</div></h6>
                              </div>

                              <!-- Relevant polls list -->

                              <ul class="list-group list-group-flush">
                                  <div v-if="relevantPolls.length != 0">
                                          <div v-for="poll in relevantPolls" :key="poll.id">
                                              <li class="list-group-item">
                                                  <div class="row align-items-center no-gutters">
                                                      <div class="col mr-2">
                                                          <h6 class="mb-0"><strong>{{poll.name}}</strong></h6>
                                                          <span class="text-xs">
                                                      <div v-if="poll.expiryDate != null">
                                                          <div v-if="poll.isExpired">
                                                              <div>{{$t('expiredOn')}}</div>
                                                          </div>
                                                          <div v-if="!poll.isExpired">
                                                              <div>{{$t('expireOn')}}</div>
                                                          </div>
                                                      </div>
                                                      {{ $d(poll.expiryDate, 'long') }}
                                                  </span>
                                                      </div>
                                                      <router-link to="/polls/${poll.id}" class="btn btn-icon stretched-link" type="button">
                                                          <i class="material-icons">keyboard_arrow_right</i>
                                                      </router-link>
                                                  </div>
                                              </li>

                                          </div>
                                      </div>
                                      <div v-else>
                                          <li class="list-group-item">
                                              <div class="row align-items-center no-gutters">
                                                  <div class="col mr-2" style="text-align: center;">
                                                      <h6 class="mb-0"><strong><div>{{$t('noPolls')}}</div></strong></h6>
                                                  </div>
                                              </div>
                                          </li>

                                      </div>
                              </ul>

                          </div>
                          <div class="card shadow mb-4">

                              <div class="card-header py-3">
                                  <h6 class="font-weight-bold m-0"><div>{{$t('controversialPolls')}}</div></h6>
                              </div>

                              <!-- Controversial polls list -->

                              <ul class="list-group list-group-flush">
                                  <div v-if="controversialPolls.length != 0">
                                          <div v-for="poll in controversialPolls" :key="poll.id">
                                              <li class="list-group-item">
                                                  <div class="row align-items-center no-gutters">
                                                      <div class="col mr-2">
                                                          <h6 class="mb-0"><strong>{{poll.name}}</strong></h6>
                                                          <span class="text-xs">
                                                              <div v-if="poll.expiryDate != null">
                                                                  <div v-if="poll.isExpired">
                                                                      <div>{{$t('expiredOn')}}</div>
                                                                  </div>
                                                                  <div v-if="!poll.isExpired">
                                                                      <div>{{$t('expireOn')}}</div>
                                                                  </div>
                                                              </div>
                                                              {{ $d(poll.expiryDate, 'long') }}
                                                          </span>
                                                      </div>
                                                      <router-link to="/polls/${poll.id}" class="btn btn-icon stretched-link" type="button">
                                                          <i class="material-icons">keyboard_arrow_right</i>
                                                      </router-link>
                                                  </div>
                                              </li>

                                          </div>
                                      </div>
                                      <div v-else>
                                          <li class="list-group-item">
                                              <div class="row align-items-center no-gutters">
                                                  <div class="col mr-2" style="text-align: center;">
                                                      <h6 class="mb-0"><strong><div>{{$t('noPolls')}}</div></strong></h6>
                                                  </div>
                                              </div>
                                          </li>

                                      </div>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
    name: 'Home',
    components: {
        'Header': Header,
        'Navbar': Navbar
    },
    data(){ 
        return {
            'announcements': [
                {'id': 1, 'title': 'Anuncio', 'summary': 'Muy importante', 'description': 'Go fuck yourself'}
            ],
            'courses': [],
            'relevantPolls': [],
            'controversialPolls': []
        }
    }
});
</script>
