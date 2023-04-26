<template>
    <div class="card">
        <div class="card-image">
            <img src="@/assets/icons/pill1.png" alt="img">
        </div>
        <div class="card-body">
            <h2 class="card-title">Omega 3</h2>
            <div class="card__description">
                <p class="card__description-text">1 tablet after meals</p>
                <p class="card__description-date">7 days</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "customCardComponent"
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.card {
  width: 100%;
  height: 100%;
  min-height: 100px;
  background: $white;
  border: 1px solid $grey3;
  border-radius: 24px;
  padding: 24px;
  display: flex;

  .card-image {
    width: 52px;
    height: 52px;
  }

  .card-body {
    margin-left: 12px;
    width: 100%;

    .card-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
    }

    .card__description {
      display: flex;
      justify-content: space-between;
      align-items: end;
      width: 100%;
      height: 28px;

      .card__description-text {
        font-size: 16px;
        font-weight: 400;
        display: flex;
        line-height: 20px;
      }

      .card__description-date {
        font-size: 16px;
        font-weight: 400;
        display: flex;
        text-align: right;
        line-height: 20px;
      }
    }
  }
}

</style>
