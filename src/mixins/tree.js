export default {
  props: {
    params: {}
  },
  data() {
    return {
      loading: false,
      users: []
    };
  },
  computed: {},
  methods: {
    generateChildren(data) {
      let result = [];
      data.forEach(user => {
        result.push({
          id: user.id,
          authentication_id: user.authentication_id,
          first_name: user.first_name,
          last_name: user.last_name,
          full_name: `${user.first_name} ${user.last_name}`,
          self_volume: Math.floor(user.self_volume),
          group_volume: Math.floor(user.group_volume),
          group_volume_progress_bar: user.group_volume_progress_bar,
          count_of_children: user.count_of_children,
          personal_group_volume: user.personal_group_volume,
          has_children: !!user.has_children,
          rank: user.rank ? (user.rank.data.length ? user.rank.data[0].name : "-") : "-",
          group_volume_gain_loss: user.group_volume_gain_loss,
          children: []
        });
      });
      return result;
    },
    load() {
      if (this.id) {
        this.loadMore(this.id, null);
      } else {
        this.startLoading();
        this.$api.tree
          .index(this.params)
          .then(({ data }) => {
            this.setMainUser(data.data);
          })
          .finally(() => {
            this.stopLoading();
          });
      }
    },
    startLoading() {
      this.$set(this, "loading", true);
      this.$emit("update:loading", true);
    },
    stopLoading() {
      this.$set(this, "loading", false);
      this.$emit("update:loading", false);
    },
    loadMore(id, index = null) {
      if (index === null) {
        if (!this.loading) {
          this.startLoading();
          this.$api.tree
            .get(id, this.params)
            .then(({ data }) => {
              this.setMainUser(data.data);
            })
            .catch(() => {
              this.$router.replace({ name: "home" });
            })
            .finally(() => {
              this.stopLoading();
            });
        }
      } else {
        if (this.users[index].children.length) {
          this.$set(this.users[index], "children", []);
        } else {
          if (!this.loading) {
            this.startLoading();
            this.$api.tree
              .get(id, this.params)
              .then(({ data }) => {
                this.$set(this.users[index], "children", this.generateChildren(data.data.children.data));
              })
              .finally(() => {
                this.stopLoading();
              });
          }
        }
      }
    },
    setMainUser(data) {
      let result = [
        {
          id: data.id,
          authentication_id: data.authentication_id,
          first_name: data.first_name,
          last_name: data.last_name,
          full_name: `${data.first_name} ${data.last_name}`,
          self_volume: Math.floor(data.self_volume),
          group_volume: Math.floor(data.group_volume),
          group_volume_progress_bar: data.group_volume_progress_bar,
          count_of_children: data.count_of_children,
          personal_group_volume: data.personal_group_volume,
          has_children: !!data.has_children,
          rank: data.rank ? (data.rank.data.length ? data.rank.data[0].name : "-") : "-",
          group_volume_gain_loss: data.group_volume_gain_loss,
          children: []
        }
      ];

      result[0].children = this.generateChildren(data.children.data);

      this.$set(this, "users", result);
    },
    getReferer(user) {
      return {
        full_name: user.full_name
      };
    }
  }
};
