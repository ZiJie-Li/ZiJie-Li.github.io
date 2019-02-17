<template>
  <nav class="navbar navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"></a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#Profile" data-id="Profile">關於我</a>
          </li>
          <li>
            <a href="#Works" data-id="Works">作品集</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
    };
  }
};
</script>
