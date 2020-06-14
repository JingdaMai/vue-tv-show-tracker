<template>
  <div>
    <form
      id="search"
      @submit.prevent="search"
    >
      <div class="filed has-addons">
        <p class="control is-expanded has-icon has-icons-left">
          <input
            v-model="searchInput"
            class="input"
            type="text"
            placeholder="Search for shows ..."
          >
          <span class="icon is-small is-left"><FontAwesomeIcon icon="search" /></span>
        </p>
        <!--        <p class="control">-->
        <!--          <button-->
        <!--            type="submit"-->
        <!--            class="button is-success"-->
        <!--          >-->
        <!--            <FontAwesomeIcon icon="search" />-->
        <!--          </button>-->
        <!--        </p>-->
      </div>
    </form>

    <a
      v-if="searchResult.length > 0"
      class="pull-left"
      @click="clearSearch"
    >
      Clear search
      <FontAwesomeIcon icon="times" />
    </a>
    
    <p v-if="searchError">
      No results found.
    </p>

    <div class="columns is-multiline">
      <div
        v-for="show in searchResult"
        :key="show.show.id"
        class="column is-2"
      >
        <div class="card">
          <div class="card-image">
            <router-link :to="`/show/${show.show.id}`">
              <img
                v-if="show.show.image"
                :src="show.show.image.medium"
                :alt="show.show.name"
              >
            </router-link>
          </div>
          <div class="card-content">
            <p class="title is-4">
              <router-link :to="`/show/${show.show.id}`">
                {{ show.show.name }}
              </router-link>
            </p>
            <p
              v-if="show.show.network"
              class="subtitle is-6"
            >
              Running on {{ show.show.network.name }}
            </p>
          </div>
          <div class="card-footer">
            <div class="card-footer-item">
              <a
                v-if="!isSubscribed(show.show)"
                @click="subscribe(show.show)"
              >
                <FontAwesomeIcon icon="star" />
                Subscribe
              </a>
              <a
                v-if="isSubscribed(show.show)"
                class="has-text-success"
                @click="subscribe(show.show)"
              >
                <FontAwesomeIcon icon="star" />
                Subscribed!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from '../library/Fetch';

export default {
  props: {
    isSubscribed: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      searchInput: '',
      searchResult: [],
      searchError: false
    };
  },
  methods: {
    search() {
      this.searchResult = [];
      this.searchError = false;

      Fetch.get('search/shows?q=' + this.searchInput)
        .then(resp => {
          if (resp.length > 0) {
            this.searchResult = resp;
          } else {
            this.searchError = true;
          }
        })
    },
    clearSearch() {
      this.searchInput = '';
      this.searchResult = [];
      this.searchError = false;
    },
    subscribe(show) {
      this.$emit('subscribe', show);
    }
  }
}
</script>