<template>

  <div class="container">
  <div class="row">
    <div class="col-md-3">
      <nav class="navbar navbar-expand-md navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topnavbar" aria-controls="topnavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="topnavbar" class="collapse navbar-collapse">
          <ul id="menu-main-menu" class="navbar-nav flex-column">
            <li class="nav-item active">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/gallery">Photos</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="col-md">
    </div>
  </div>
</div>


</template>

<style>

@media (min-width: 768px), all {
  .navbar-expand-md .navbar-toggler {
    position: absolute;
    left: 50%;
    text-align: left;
    transform: translatex(-50%);
  }
}

.navbar-expand-md{
  height: 100%;
   width: 50px;
   position: fixed;
   z-index: 0;
   top: 0;
   left: 0;
   padding-left: 20px;



 }

</style>
