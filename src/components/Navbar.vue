<template>
  <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion sidebar-toggled sidebar-dark p-0 toggled" style="background: rgb(2,86,138);">

      <div class="container-fluid d-flex flex-column p-0">

          <router-link class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" to="/">
              <img src="../assets/img/logo.png" height="50">
          </router-link>

          <ul class="nav navbar-nav text-light" id="accordionSidebar">
              <li class="nav-item">
                  <router-link class="nav-link" to="/">
                      <i class="material-icons">home</i>
                      <span><div>{{$t('home')}}</div></span>
                  </router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/courses">
                      <i class="icon-graduation"></i>
                      <span><div>{{$t('courses')}}</div></span>
                  </router-link>
                  <hr class="sidebar-divider">
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/announcements">
                      <i class="material-icons">fiber_new</i>
                      <span><div>{{$t('announcement')}}</div></span>
                  </router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/polls">
                      <i class="fas fa-poll"></i>
                      <span><div>{{$t('polls')}}</div></span>
                  </router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/chats">
                      <i class="material-icons">people</i>
                      <span><div>{{$t('chatGroups')}}</div></span>
                  </router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/contents">
                      <i class="fas fa-book"></i>
                      <span><div>{{$t('contents')}}</div></span>
                  </router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/profile">
                      <i class="fas fa-user-friends"></i>
                      <span><div>{{$t('people')}}</div></span>
                  </router-link>
              </li>

              <c:if test="${canReadStats}">
                  <li class="nav-item">
                      <hr class="sidebar-divider">
                      <router-link class="nav-link" to="/admin/statistics">
                          <i class="fas fa-chart-bar"></i>
                          <span><div>{{$t('statistics')}}</div></span>
                      </router-link>
                  </li>
              </c:if>
          </ul>
          <div class="text-center d-none d-md-inline"></div>
      </div>

  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>
