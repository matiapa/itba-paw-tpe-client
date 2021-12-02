<template>
  <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
    <div class="container-fluid">
        <button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop-1" type="button">
          <i class="fas fa-bars"></i>
        </button>

        <ul class="nav navbar-nav flex-nowrap ml-auto">

            <!-- Profile dropdown -->

            <li class="nav-item dropdown no-arrow">
                <div class="nav-item dropdown no-arrow">
                    <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">
                        <span class="d-none d-lg-inline mr-2 text-gray-600 small">
                            {{user.fullName}}
                        </span>
                        <img class="border rounded-circle img-profile" :src="'/profile/'+user.id+'/picture'">
                    </a>
                    <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                        <router-link class="dropdown-item" to="/profile/own">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> <div>{{$t('profile')}}</div>
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <form action='/signout' method="POST">
                            <label class="dropdown-item">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> <div>{{$t('exit')}}</div>
                                <input type="submit" hidden>
                            </label>
                        </form>
                    </div>
                </div>
            </li>

        </ul>

    </div>
</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    user: Object
  }
});
</script>