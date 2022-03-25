<template>
  <div class="col-lg-8 offset-lg-2 col-md-12">
    <div class="header row ">
      <nav class="navbar">
        <router-link class="navbar-brand" to="/">
          <img src="../../../assets/images/Logo_4.png" alt="" srcset=""
        /></router-link>

        <div class="icons ms-lg-auto d-flex">
          <div
            class="d-flex"
            :class="isSearchBar ? 'search__bar__show' : 'search__bar'"
          >
            <div class="search_icon mx-2" @click="SearchShow">
              <i class="bi bi-search"></i>
            </div>

            <div class="search__input">
              <input
                type="text"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="search"
                :class="isInputShow ? 'input__show' : 'defaultInput'"
              />
              <i
                class="bi bi-x close__icon"
                :class="isIconShow ? 'i__show' : 'defaultExit'"
                @click="closeSearch"
              ></i>
            </div>
          </div>
          <div class="form_icon" @click="showForm">
            <i class="bi bi-three-dots-vertical"></i>
          </div>
        </div>
      </nav>

      <div class="form_info" v-if="isShow">
        <p>Please add your account details</p>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name / Email
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Type your username here"
            />
          </div>
          <div class="mb-3 overflow-auto">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Type your password"
            />
            <div id="passwordHelp" class="form-text ms-auto float-end">
              Forget Password ?
            </div>
          </div>

          <button type="button" class="form-control" @click="showForm">
            login
          </button>
          <div class="text-center mx-auto">
            <span>Dont have an account? sign up!</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isShow: false,
      isIconShow: false,
      isInputShow: false,
      isSearchBar: false,
    };
  },
  methods: {
    showForm() {
      this.isShow = !this.isShow;
    },
    SearchShow() {
      this.isIconShow = true;
      this.isInputShow = true;
      this.isSearchBar = true;
      // console.log('ok')
    },
    closeSearch() {
      this.isIconShow = false;
      this.isInputShow = false;
      this.isSearchBar = false;
    },
  },
};
</script>

<style lang="css" scoped>
.header {
  position: relative;
  background-color: #fff;
}
.navbar
{
padding: 0;
}
.navbar .navbar-brand img {
  width: 259px;
  height: 70px;
}
.navbar .icons i {
  font-size: 18px;
  color: #572589;
}

.search__bar {
  border: none;
  transition: 1s;
  border: 2px solid transparent;
}
.search__bar__show {
  border: 2px solid #572589;
  border-radius: 20px;
  transition: 1s;
}
.search__input {
  position: relative;
}

.search__input .defaultInput {
  border: none;
  outline: none;
  background: transparent;
  transition: 1s;
  transform: scaleX(0);
  width: 0;
}
.input__show {
  width: 200px;
  border: none;
  outline: none;
  background: transparent;
  transition: 1s;
}

.search__input .defaultExit {
  position: absolute;
  right: 5%;
  top: 5%;
  transition: 1s;
  transform: scaleX(0);
}
.i__show {
  display: inline;
  position: absolute;
  right: 5%;
  top: 5%;
  transition: 1s;
}

.search_icon i {
  font-size: 14px;
}

.form_info {
  width: 377px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 1px 5px 0px rgba(151, 151, 151, 0.48);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(151, 151, 151, 0.48);
  -moz-box-shadow: 0px 1px 5px 0px rgba(151, 151, 151, 0.48);
  padding: 20px;
  position: absolute;
  right: 0%;
  top: 70%;
  transition: 1s;
  z-index: 1000;
}
.form_info p {
  color: #444242;
  font-size: 16px;
  font-weight: bold;
}
.form_info label {
  font-size: 14px;
}
.form_info input:focus
{
outline: none;
box-shadow:none ;
border-color: #212529;
}
.form_info input::placeholder {
  font-size: 12px;
}
.form_info #passwordHelp {
  font-size: 14.4px;
  color: #572589;
}

.form_info button {
  background-color: #572589;
  border-radius: 4px;
  color: white;

  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 16px;
}

.form_info span {
  font-size: 14.4px;
  color: #572589;
}

@media (max-width: 320px) {

 .navbar
 {
 padding: 0px 16px;}
   .navbar .navbar-brand
   {
   width: 45%;}
  .navbar .navbar-brand img {
    width: 100%;
  }


  .navbar .icons i {
    font-size: 13px;
  }

  .search__bar {
    border: 1px solid transparent;
    font-size: 12px;
  }
  .search__bar__show {
    border: 1px solid #572589;
     font-size: 12px;
  }

  .input__show {
    width: 100px;
     font-size: 12px;
  }

  .search__input .defaultExit {
    right: 2%;
    top: 5%;
     font-size: 12px;
  }
  .i__show {
    right: 7%;
    top: 5%;

  }

  .search_icon i {
    font-size: 14px;
  }

  .form_info {
    width: 95%;
    border-radius: 2px;
    padding: 16px;
    top: 78%;
  }
  .form_info p {
    font-size: 14px;
  }
   .form_info input
   {
   padding: 2px 8px;}
  .form_info input::placeholder {
    font-size: 11px;
  }
  .form_info #passwordHelp {
    font-size: 12px;
  }

  .form_info button {
    font-size: 13px;
    margin-top: 4px;
    margin-bottom: 10px;
  }

  .form_info span {
    font-size: 12px;
  }
}

@media (min-width: 321px) and (max-width: 576px) {
  .header {
  width: 100%;
}
 

  .input__show {
    width: 145px;
     font-size: 14px;
  }

  
  .form_info {
    width: 90%;
    top: 82%;
  }
  .form_info p {
    font-size: 15px;
  }
   .form_info input
   {
   padding: 4px 12px;}
  .form_info input::placeholder {
    font-size: 13px;
  }
  .form_info #passwordHelp {
    font-size: 13px;
  }

  .form_info button {
    font-size: 16px;
 
  }

  .form_info span {
    font-size: 14px;
  }



}

@media (min-width: 577px) and (max-width: 768px) {


 .navbar
 {
 padding: 0px 20px;}

  .input__show {
    width: 180px;
  }

  
  .form_info {
    width: 60%;
    padding: 20px;
    right: 3%;
  }

}

@media (max-width: 992px) {

 .navbar
 {
 padding: 0px 30px;}
}

@media (max-width: 1200px) {
}

@media (max-width: 1400px) {
}
</style>
