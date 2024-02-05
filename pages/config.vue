<template>
  <div class="master">
    <SiteTop class="site_top" :title="title" />

    <div class="cover">
      <div class="container">
        <div class="buttons">
          <button
            @click="(handleConfig = true), (handelTech = false)"
            :class="{ active: handleConfig == true }"
          >
            {{ $store.state.translations["config.title"] }}
          </button>
          <button
            @click="(handelTech = true), (handleConfig = false)"
            :class="{ active: handelTech }"
          >
            {{ $store.state.translations["config.send_tz"] }}
          </button>
        </div>
        <div class="body">
          <div :class="{ active: handleConfig == true }" class="config tab">
            <a-form-model
              ref="ruleForm"
              :model="server_form"
              :rules="rules"
              @submit.prevent="serverSubmit"
            >
              <h4 class="title">
                {{ $store.state.translations["config.params"] }}
              </h4>
              <div class="items">
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="31"
                        viewBox="0 0 34 31"
                        fill="none"
                      >
                        <path
                          d="M15.333 7.16667V2.16667C15.333 1.2462 16.0792 0.5 16.9997 0.5H31.9997C32.9202 0.5 33.6663 1.2462 33.6663 2.16667V28.8333C33.6663 29.7538 32.9202 30.5 31.9997 30.5H1.99967C1.07921 30.5 0.333008 29.7538 0.333008 28.8333V8.83333C0.333008 7.91287 1.07921 7.16667 1.99967 7.16667H15.333ZM5.33301 22.1667V25.5H13.6663V22.1667H5.33301ZM20.333 22.1667V25.5H28.6663V22.1667H20.333ZM20.333 17.1667V20.5H28.6663V17.1667H20.333ZM20.333 12.1667V15.5H28.6663V12.1667H20.333ZM5.33301 17.1667V20.5H13.6663V17.1667H5.33301Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>{{ attributes[0].title }} <span class="dot">*</span></p>
                  </div>
                  <a-form-model-item required prop="server_options.type">
                    <a-select
                      :placeholder="select"
                      v-model="server_form.server_options.type"
                    >
                      <a-select-option
                        v-for="main in attributes[0].options"
                        :key="main.id"
                        :value="main.id"
                      >
                        {{ main.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>

                  <a-form-model-item required prop="execution_type">
                    <a-select
                      :placeholder="$store.state.translations['config.type']"
                      v-model="server_form.execution_type"
                    >
                      <a-select-option
                        :disabled="
                          !disableds[server_form.server_options.type]?.includes(
                            'U1'
                          )
                        "
                        value="U1"
                      >
                        U1
                      </a-select-option>
                      <a-select-option
                        :disabled="
                          !disableds[server_form.server_options.type]?.includes(
                            'U2'
                          )
                        "
                        value="U2"
                      >
                        U2
                      </a-select-option>
                      <a-select-option
                        :disabled="
                          !disableds[server_form.server_options.type]?.includes(
                            'U3'
                          )
                        "
                        value="U3"
                      >
                        U3
                      </a-select-option>
                      <a-select-option
                        :disabled="
                          !disableds[server_form.server_options.type]?.includes(
                            'U4'
                          )
                        "
                        value="U4"
                      >
                        U4
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                </div>
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M9.99967 30.5H29.9997V10.5H9.99967V30.5ZM23.333 33.8334H16.6663V37.1667H13.333V33.8334H8.33301C7.41254 33.8334 6.66634 33.0872 6.66634 32.1667V27.1667H3.33301V23.8334H6.66634V17.1667H3.33301V13.8334H6.66634V8.83337C6.66634 7.91291 7.41254 7.16671 8.33301 7.16671H13.333V3.83337H16.6663V7.16671H23.333V3.83337H26.6663V7.16671H31.6663C32.5868 7.16671 33.333 7.91291 33.333 8.83337V13.8334H36.6663V17.1667H33.333V23.8334H36.6663V27.1667H33.333V32.1667C33.333 33.0872 32.5868 33.8334 31.6663 33.8334H26.6663V37.1667H23.333V33.8334ZM13.333 13.8334H26.6663V27.1667H13.333V13.8334Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>{{ attributes[1].title }} <span class="dot">*</span></p>
                  </div>
                  <a-form-model-item required prop="server_options.cpu">
                    <a-select
                      :placeholder="select"
                      v-model="server_form.server_options.cpu"
                    >
                      <a-select-option
                        v-for="cpu in attributes[1].options"
                        :key="cpu.id"
                        :value="cpu.id"
                      >
                        {{ cpu.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                </div>
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M3.33366 8.83337C2.41319 8.83337 1.66699 9.57957 1.66699 10.5V30.5C1.66699 31.4205 2.41319 32.1667 3.33366 32.1667H8.33366V28.8334H11.667V32.1667H15.0003V28.8334H18.3337V32.1667H21.667V28.8334H25.0003V32.1667H28.3337V28.8334H31.667V32.1667H36.667C37.5875 32.1667 38.3337 31.4205 38.3337 30.5V10.5C38.3337 9.57957 37.5875 8.83337 36.667 8.83337H3.33366ZM8.33366 15.5H18.3337V20.5H8.33366V15.5ZM21.667 15.5H31.667V20.5H21.667V15.5Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>{{ attributes[2].title }} <span class="dot">*</span></p>
                  </div>
                  <a-form-model-item required prop="server_options.ram">
                    <a-select
                      :placeholder="select"
                      v-model="server_form.server_options.ram"
                    >
                      <a-select-option
                        v-for="ram in attributes[2].options"
                        :key="ram.id"
                        :value="ram.id"
                      >
                        {{ ram.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>

                  <a-form-model-item required prop="ram_count">
                    <a-select
                      :placeholder="$store.state.translations['config.count']"
                      v-model="server_form.ram_count"
                    >
                      <a-select-option value="1"> 1 </a-select-option>
                      <a-select-option value="2"> 2 </a-select-option>
                      <a-select-option value="4"> 4 </a-select-option>
                      <a-select-option value="8"> 8 </a-select-option>
                      <a-select-option value="10"> 10+ </a-select-option>
                    </a-select>
                  </a-form-model-item>
                </div>
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M23.251 3.83331H33.3333C34.2538 3.83331 35 4.57951 35 5.49998V35.5C35 36.4205 34.2538 37.1666 33.3333 37.1666H6.66667C5.7462 37.1666 5 36.4205 5 35.5V22.0843C5.54818 22.1388 6.10417 22.1666 6.66667 22.1666C15.8714 22.1666 23.3333 14.7047 23.3333 5.49998C23.3333 4.93748 23.3055 4.3815 23.251 3.83331ZM25 27.1666V30.5H28.3333V27.1666H25ZM19.8968 3.83331C19.965 4.3793 20 4.93555 20 5.49998C20 12.8638 14.0305 18.8333 6.66667 18.8333C6.10223 18.8333 5.54598 18.7983 5 18.7301V5.49998C5 4.57951 5.7462 3.83331 6.66667 3.83331H19.8968Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>
                      {{ $store.state.translations["config.ssd"] }}
                      <span class="dot">*</span>
                    </p>
                  </div>
                  <a-form-model-item required prop="server_options.raid">
                    <a-select
                      :placeholder="select"
                      v-model="server_form.server_options.raid"
                    >
                      <a-select-option
                        v-for="raid in attributes[3].options"
                        :key="raid.id"
                        :value="raid.id"
                      >
                        {{ raid.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item>
                    <a-select
                      :placeholder="$store.state.translations['config.storage']"
                    >
                      <a-select-option
                        :value="$store.state.translations[`config.ssd_1`]"
                      >
                        {{ $store.state.translations["config.ssd_1"] }}
                      </a-select-option>
                      <a-select-option
                        :value="$store.state.translations[`config.ssd_2`]"
                      >
                        {{ $store.state.translations["config.ssd_2"] }}
                      </a-select-option>
                      <a-select-option
                        :value="$store.state.translations[`config.ssd_3`]"
                      >
                        {{ $store.state.translations["config.ssd_3"] }}
                      </a-select-option>
                      <a-select-option
                        :value="$store.state.translations[`config.ssd_4`]"
                      >
                        {{ $store.state.translations["config.ssd_4"] }}
                      </a-select-option>
                      <a-select-option
                        :value="$store.state.translations[`config.ssd_5`]"
                      >
                        {{ $store.state.translations["config.ssd_5"] }}
                      </a-select-option>
                      <a-select-option
                        :value="$store.state.translations[`config.ssd_6`]"
                      >
                        {{ $store.state.translations["config.ssd_6"] }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <div class="div"></div>
                  <a-form-model-item>
                    <a-select
                      :placeholder="$store.state.translations['config.count']"
                    >
                      <a-select-option value="1"> 1 </a-select-option>
                      <a-select-option value="2"> 2 </a-select-option>
                      <a-select-option value="4"> 4 </a-select-option>
                      <a-select-option value="8"> 8 </a-select-option>
                      <a-select-option value="10"> 10+ </a-select-option>
                    </a-select>
                  </a-form-model-item>
                </div>
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M23.251 3.83337H33.3333C34.2538 3.83337 35 4.57957 35 5.50004V35.5C35 36.4205 34.2538 37.1667 33.3333 37.1667H6.66667C5.7462 37.1667 5 36.4205 5 35.5V22.0844C5.54818 22.1389 6.10417 22.1667 6.66667 22.1667C15.8714 22.1667 23.3333 14.7048 23.3333 5.50004C23.3333 4.93754 23.3055 4.38156 23.251 3.83337ZM25 27.1667V30.5H28.3333V27.1667H25ZM19.8968 3.83337C19.965 4.37936 20 4.93561 20 5.50004C20 12.8638 14.0305 18.8334 6.66667 18.8334C6.10223 18.8334 5.54598 18.7984 5 18.7302V5.50004C5 4.57957 5.7462 3.83337 6.66667 3.83337H19.8968Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>
                      {{ attributes[4].title }}
                      {{ $store.state.translations["config.hdd"] }}
                    </p>
                  </div>
                  <a-select
                    :placeholder="select"
                    v-model="server_form.server_options.rom_1"
                  >
                    <a-select-option
                      v-for="rom_1 in attributes[4].options"
                      :key="rom_1.id"
                      :value="rom_1.id"
                    >
                      {{ rom_1.title }}
                    </a-select-option>
                  </a-select>

                  <a-select
                    :placeholder="$store.state.translations['config.count']"
                    v-model="server_form.hard_disks_first_count"
                  >
                    <a-select-option value="1"> 1 </a-select-option>
                    <a-select-option value="2"> 2 </a-select-option>
                    <a-select-option value="4"> 4 </a-select-option>
                    <a-select-option value="8"> 8 </a-select-option>
                    <a-select-option value="10"> 10+ </a-select-option>
                  </a-select>
                </div>
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M23.251 3.83337H33.3333C34.2538 3.83337 35 4.57957 35 5.50004V35.5C35 36.4205 34.2538 37.1667 33.3333 37.1667H6.66667C5.7462 37.1667 5 36.4205 5 35.5V22.0844C5.54818 22.1389 6.10417 22.1667 6.66667 22.1667C15.8714 22.1667 23.3333 14.7048 23.3333 5.50004C23.3333 4.93754 23.3055 4.38156 23.251 3.83337ZM25 27.1667V30.5H28.3333V27.1667H25ZM19.8968 3.83337C19.965 4.37936 20 4.93561 20 5.50004C20 12.8638 14.0305 18.8334 6.66667 18.8334C6.10223 18.8334 5.54598 18.7984 5 18.7302V5.50004C5 4.57957 5.7462 3.83337 6.66667 3.83337H19.8968Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>
                      {{ attributes[5].title }}
                      {{ $store.state.translations["config.hdd"] }}
                    </p>
                  </div>

                  <a-select
                    :placeholder="select"
                    v-model="server_form.server_options.rom_2"
                  >
                    <a-select-option
                      v-for="rom_2 in attributes[5].options"
                      :key="rom_2.id"
                      :value="rom_2.id"
                    >
                      {{ rom_2.title }}
                    </a-select-option>
                  </a-select>

                  <a-select
                    :placeholder="$store.state.translations['config.count']"
                    v-model="server_form.hard_disks_second_count"
                  >
                    <a-select-option value="1"> 1 </a-select-option>
                    <a-select-option value="2"> 2 </a-select-option>
                    <a-select-option value="4"> 4 </a-select-option>
                    <a-select-option value="8"> 8 </a-select-option>
                    <a-select-option value="10"> 10+ </a-select-option>
                  </a-select>
                </div>
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M21.6663 30.5V33.8333H28.333V37.1667H11.6663V33.8333H18.333V30.5H4.98601C4.07309 30.5 3.33301 29.7518 3.33301 28.8208V7.17913C3.33301 6.25178 4.09186 5.5 4.98601 5.5H35.0133C35.9263 5.5 36.6663 6.2482 36.6663 7.17913V28.8208C36.6663 29.7482 35.9075 30.5 35.0133 30.5H21.6663Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>{{ attributes[6].title }} <span class="dot">*</span></p>
                  </div>
                  <a-form-model-item required prop="server_options.connect">
                    <a-select
                      :placeholder="select"
                      v-model="server_form.server_options.connect"
                    >
                      <a-select-option
                        v-for="connect in attributes[6].options"
                        :key="connect.id"
                        :value="connect.id"
                      >
                        {{ connect.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>

                  <a-form-model-item required prop="network_interfaces_count">
                    <a-select
                      :placeholder="$store.state.translations['config.count']"
                      v-model="server_form.network_interfaces_count"
                    >
                      <a-select-option value="1"> 1 </a-select-option>
                      <a-select-option value="2"> 2 </a-select-option>
                      <a-select-option value="4"> 4 </a-select-option>
                      <a-select-option value="8"> 8 </a-select-option>
                      <a-select-option value="10"> 10+ </a-select-option>
                    </a-select>
                  </a-form-model-item>
                </div>
                <!-- <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M28.3338 20.5C29.2543 20.5 30.0005 21.2462 30.0005 22.1667V37.1667H10.0006V22.1667C10.0006 21.2462 10.7468 20.5 11.6672 20.5H28.3338ZM16.6672 23.8334H13.3339V27.1667H16.6672V23.8334ZM20.0005 10.5C23.9155 10.5 27.3048 12.7497 28.9467 16.0267L25.9648 17.518C24.8703 15.3332 22.6107 13.8334 20.0005 13.8334C17.3905 13.8334 15.1309 15.3332 14.0364 17.518L11.0544 16.0267C12.6962 12.7497 16.0857 10.5 20.0005 10.5ZM20.0005 3.83337C26.5258 3.83337 32.1752 7.58322 34.9113 13.0455L31.9297 14.5374C29.7408 10.167 25.2212 7.16671 20.0005 7.16671C14.78 7.16671 10.2603 10.167 8.07151 14.5374L5.08984 13.0455C7.82601 7.58322 13.4754 3.83337 20.0005 3.83337Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>{{ attributes[7].title }}</p>
                  </div>

                  <a-select
                    :placeholder="select"
                    v-model="server_form.server_options.distance"
                  >
                    <a-select-option
                      v-for="distance in attributes[7].options"
                      :key="distance.id"
                      :value="distance.id"
                    >
                      {{ distance.title }}
                    </a-select-option>
                  </a-select>
                </div> -->
                <div class="item">
                  <div class="name">
                    <div class="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M21.667 17.1666H33.3337L18.3337 38.8333V23.8333H6.66699L21.667 2.16663V17.1666Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </div>
                    <p>{{ attributes[8].title }} <span class="dot">*</span></p>
                  </div>

                  <a-form-model-item required prop="server_options.power">
                    <a-select
                      :placeholder="select"
                      v-model="server_form.server_options.power"
                    >
                      <a-select-option
                        v-for="power in attributes[8].options"
                        :key="power.id"
                        :value="power.id"
                      >
                        {{ power.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>

                  <a-form-model-item required prop="power_unit_count">
                    <a-select
                      :placeholder="$store.state.translations['config.count']"
                      v-model="server_form.power_unit_count"
                    >
                      <a-select-option value="1"> 1 </a-select-option>
                      <a-select-option value="2"> 2 </a-select-option>
                      <a-select-option value="4"> 4 </a-select-option>
                      <a-select-option value="8"> 8 </a-select-option>
                      <a-select-option value="10"> 10+ </a-select-option>
                    </a-select>
                  </a-form-model-item>
                </div>
              </div>

              <div class="warn">
                <div class="vector">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="112"
                    height="112"
                    viewBox="0 0 112 112"
                    fill="none"
                  >
                    <g opacity="0.1">
                      <path
                        d="M81.4541 26.5454C81.4541 28.7546 83.245 30.5454 85.4541 30.5454L112 30.5454L112 7.99995C112 3.58167 108.418 -4.62263e-05 104 -4.584e-05L81.4541 -4.3869e-05L81.4541 26.5454Z"
                        fill="white"
                      />
                      <rect
                        width="30.5455"
                        height="30.5455"
                        rx="4"
                        transform="matrix(1 0 0 -1 81.4541 71.2727)"
                        fill="white"
                      />
                      <rect
                        width="30.5455"
                        height="30.5455"
                        rx="4"
                        transform="matrix(1 0 0 -1 40.7275 71.2727)"
                        fill="white"
                      />
                      <rect
                        width="30.5455"
                        height="30.5455"
                        rx="4"
                        transform="matrix(1 0 0 -1 81.4541 112)"
                        fill="white"
                      />
                      <rect
                        width="30.5455"
                        height="30.5455"
                        rx="4"
                        transform="matrix(1 0 0 -1 40.7275 30.5454)"
                        fill="white"
                      />
                      <rect
                        width="30.5455"
                        height="30.5455"
                        rx="4"
                        transform="matrix(1 0 0 -1 0 30.5454)"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>

                <h4>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M36.6663 20C36.6663 29.2048 29.2044 36.6667 19.9997 36.6667C10.7949 36.6667 3.33301 29.2048 3.33301 20C3.33301 10.7953 10.7949 3.33337 19.9997 3.33337C29.2044 3.33337 36.6663 10.7953 36.6663 20ZM21.6663 11.6667C21.6663 12.5872 20.9201 13.3334 19.9997 13.3334C19.0792 13.3334 18.333 12.5872 18.333 11.6667C18.333 10.7462 19.0792 10 19.9997 10C20.9201 10 21.6663 10.7462 21.6663 11.6667ZM18.333 15.4167C17.6427 15.4167 17.083 15.9764 17.083 16.6667C17.083 17.3571 17.6427 17.9167 18.333 17.9167H18.7497V28.3334C18.7497 29.0237 19.3093 29.5834 19.9997 29.5834C20.69 29.5834 21.2497 29.0237 21.2497 28.3334V16.6667C21.2497 15.9764 20.69 15.4167 19.9997 15.4167H18.333Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  {{ $store.state.translations["config.not_yet"] }}
                </h4>
                <p>
                  {{ $store.state.translations["config.not_txt"] }}
                </p>
              </div>

              <div class="app">
                <h4 class="title">
                  {{ $store.state.translations["config.contacts"] }}
                </h4>
                <div class="inputs">
                  <div class="input">
                    <label for="name"
                      >{{ $store.state.translations["config.name"] }}
                      <span class="dot"> * </span></label
                    >
                    <input
                      type="text"
                      id="name"
                      :placeholder="
                        $store.state.translations['config.submit_name']
                      "
                      v-model="server_form.name"
                      required
                    />
                    <span class="pen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5168 0.816266C16.4284 -0.272087 14.6639 -0.272084 13.5755 0.816268L12.1704 2.22139L16.1117 6.16266L17.5168 4.75754C18.6051 3.66919 18.6051 1.90462 17.5168 0.816266ZM15.051 7.22332L11.1097 3.28205L2.12 12.2718C1.55946 12.8323 1.18044 13.5485 1.0322 14.3272L0.607981 16.5557C0.476024 17.2489 1.08416 17.857 1.77734 17.7251L4.00582 17.3008C4.78456 17.1526 5.50073 16.7736 6.06127 16.213L15.051 7.22332Z"
                          fill="#F3F5F7"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="input">
                    <label for="number"
                      >{{ $store.state.translations["config.number"] }}
                      <span class="dot"> * </span></label
                    >
                    <input
                      type="text"
                      id="number"
                      :placeholder="
                        $store.state.translations['config.submit_number']
                      "
                      v-model="server_form.phone_number"
                      required
                    />
                    <span class="pen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5168 0.816266C16.4284 -0.272087 14.6639 -0.272084 13.5755 0.816268L12.1704 2.22139L16.1117 6.16266L17.5168 4.75754C18.6051 3.66919 18.6051 1.90462 17.5168 0.816266ZM15.051 7.22332L11.1097 3.28205L2.12 12.2718C1.55946 12.8323 1.18044 13.5485 1.0322 14.3272L0.607981 16.5557C0.476024 17.2489 1.08416 17.857 1.77734 17.7251L4.00582 17.3008C4.78456 17.1526 5.50073 16.7736 6.06127 16.213L15.051 7.22332Z"
                          fill="#F3F5F7"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="input">
                    <label for="email">{{
                      $store.state.translations["config.email"]
                    }}</label>
                    <input
                      type="text"
                      id="email"
                      :placeholder="$store.state.translations['config.email']"
                      v-model="server_form.email"
                    />
                    <span class="pen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5168 0.816266C16.4284 -0.272087 14.6639 -0.272084 13.5755 0.816268L12.1704 2.22139L16.1117 6.16266L17.5168 4.75754C18.6051 3.66919 18.6051 1.90462 17.5168 0.816266ZM15.051 7.22332L11.1097 3.28205L2.12 12.2718C1.55946 12.8323 1.18044 13.5485 1.0322 14.3272L0.607981 16.5557C0.476024 17.2489 1.08416 17.857 1.77734 17.7251L4.00582 17.3008C4.78456 17.1526 5.50073 16.7736 6.06127 16.213L15.051 7.22332Z"
                          fill="#F3F5F7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div class="battons">
                <button class="cancel">
                  {{ $store.state.translations["config.cancel"] }}
                </button>
                <button class="submit" type="submit">
                  {{ $store.state.translations["config.send"] }}
                </button>
              </div>
            </a-form-model>
          </div>
          <div :class="{ active: handelTech == true }" class="tech tab">
            <form @submit.prevent="onSubmit">
              <div class="upload">
                <h4 class="title">
                  {{ $store.state.translations["config.send_file"] }}
                </h4>
                <a-upload
                  name="file"
                  :multiple="false"
                  action="https://admin.hpsuz.com/api/upload"
                  :headers="headers"
                  @change="handleChange"
                  :file="file"
                >
                  <a-button>
                    <p>{{ $store.state.translations["config.choose_file"] }}</p>
                    <span class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.75 5.5C1.75 3.70508 3.20507 2.25 5 2.25L13 2.25C13.4142 2.25 13.75 1.91422 13.75 1.5C13.75 1.08579 13.4142 0.750002 13 0.750002L5 0.750001C2.37665 0.75 0.25 2.87665 0.249999 5.5L0.249997 17.5C0.249997 20.1234 2.37664 22.25 5 22.25L17 22.25C19.6233 22.25 21.75 20.1234 21.75 17.5L21.75 9.5C21.75 9.08579 21.4142 8.75 21 8.75C20.5858 8.75 20.25 9.08579 20.25 9.5L20.25 13.0091C20.2049 12.973 20.158 12.9387 20.1094 12.9063L17.7285 11.319C16.142 10.2613 14.0295 10.4705 12.6812 11.8188L9.31875 15.1812C7.97049 16.5295 5.85802 16.7387 4.27153 15.681L1.75 14L1.75 5.5ZM18 8.25C18.4142 8.25 18.75 7.91422 18.75 7.5L18.75 3.31066L19.4697 4.03033C19.7626 4.32323 20.2374 4.32323 20.5303 4.03033C20.8232 3.73744 20.8232 3.26257 20.5303 2.96967L19.2374 1.67678C18.554 0.993362 17.446 0.993362 16.7626 1.67678L15.4697 2.96967C15.1768 3.26257 15.1768 3.73744 15.4697 4.03033C15.7626 4.32323 16.2374 4.32323 16.5303 4.03033L17.25 3.31066L17.25 7.5C17.25 7.91422 17.5858 8.25 18 8.25ZM7.5 10.5C8.88071 10.5 10 9.38071 10 8C10 6.61929 8.88071 5.5 7.5 5.5C6.11929 5.5 5 6.61929 5 8C5 9.38071 6.11929 10.5 7.5 10.5Z"
                          fill="#1AB99D"
                        />
                      </svg>
                    </span>
                  </a-button>
                </a-upload>
              </div>

              <div class="app">
                <h4 class="title">
                  {{ $store.state.translations["config.contacts"] }}
                </h4>
                <div class="inputs">
                  <div class="input">
                    <label for="name"
                      >{{ $store.state.translations["config.name"] }}
                      <span class="dot"> * </span></label
                    >
                    <input
                      type="text"
                      id="name"
                      :placeholder="
                        $store.state.translations['config.submit_name']
                      "
                      v-model="full_name"
                      required
                    />
                    <span class="pen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5168 0.816266C16.4284 -0.272087 14.6639 -0.272084 13.5755 0.816268L12.1704 2.22139L16.1117 6.16266L17.5168 4.75754C18.6051 3.66919 18.6051 1.90462 17.5168 0.816266ZM15.051 7.22332L11.1097 3.28205L2.12 12.2718C1.55946 12.8323 1.18044 13.5485 1.0322 14.3272L0.607981 16.5557C0.476024 17.2489 1.08416 17.857 1.77734 17.7251L4.00582 17.3008C4.78456 17.1526 5.50073 16.7736 6.06127 16.213L15.051 7.22332Z"
                          fill="#F3F5F7"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="input">
                    <label for="number"
                      >{{ $store.state.translations["config.number"] }}
                      <span class="dot"> * </span></label
                    >
                    <input
                      type="text"
                      id="number"
                      :placeholder="
                        $store.state.translations['config.submit_number']
                      "
                      v-model="number"
                      required
                    />
                    <span class="pen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5168 0.816266C16.4284 -0.272087 14.6639 -0.272084 13.5755 0.816268L12.1704 2.22139L16.1117 6.16266L17.5168 4.75754C18.6051 3.66919 18.6051 1.90462 17.5168 0.816266ZM15.051 7.22332L11.1097 3.28205L2.12 12.2718C1.55946 12.8323 1.18044 13.5485 1.0322 14.3272L0.607981 16.5557C0.476024 17.2489 1.08416 17.857 1.77734 17.7251L4.00582 17.3008C4.78456 17.1526 5.50073 16.7736 6.06127 16.213L15.051 7.22332Z"
                          fill="#F3F5F7"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="input">
                    <label for="email">{{
                      $store.state.translations["config.email"]
                    }}</label>
                    <input
                      type="text"
                      id="email"
                      p:placeholder="
                        $store.state.translations['config.email']
                      "
                      v-model="email"
                    />
                    <span class="pen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5168 0.816266C16.4284 -0.272087 14.6639 -0.272084 13.5755 0.816268L12.1704 2.22139L16.1117 6.16266L17.5168 4.75754C18.6051 3.66919 18.6051 1.90462 17.5168 0.816266ZM15.051 7.22332L11.1097 3.28205L2.12 12.2718C1.55946 12.8323 1.18044 13.5485 1.0322 14.3272L0.607981 16.5557C0.476024 17.2489 1.08416 17.857 1.77734 17.7251L4.00582 17.3008C4.78456 17.1526 5.50073 16.7736 6.06127 16.213L15.051 7.22332Z"
                          fill="#F3F5F7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div class="battons">
                <button class="cancel">
                  {{ $store.state.translations["config.cancel"] }}
                </button>
                <button class="submit" type="submit">
                  {{ $store.state.translations["config.send"] }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formApi from "@/api/form.js";
import attributesApi from "@/api/attributes.js";

export default {
  name: "config",

  layout: "white",

  data() {
    return {
      title: this.$store.state.translations["DesktopFooter.3_key3"],
      select: this.$store.state.translations["config.choose"],

      disableds: {
        1: ["U1", "U2", "U4"],
        2: ["U3"],
      },

      handleConfig: true,
      handelTech: false,

      full_name: "",
      number: "",
      email: "",
      file: "",

      token: "6273572946:AAFPB99kVWMrOWoR9NCHoO3ziAzv0Nh1WTM",
      chatId: "-1002084026037",

      headers: {},

      server_form: {
        name: "",
        phone_number: "",
        email: "",
        execution_type: undefined,
        ram_count: undefined,
        hard_disks_first_count: undefined,
        hard_disks_second_count: undefined,
        network_interfaces_count: undefined,
        power_unit_count: undefined,
        server_options: {
          type: undefined,
          cpu: undefined,
          ram: undefined,
          raid: undefined,
          rom_1: undefined,
          rom_2: undefined,
          connect: undefined,
          distance: 1,
          power: undefined,
        },
      },

      rules: {
        execution_type: [
          {
            required: true,
            message: this.$store.state.translations["config.required"],
            trigger: "change",
          },
        ],
        ram_count: [
          {
            required: true,
            message: this.$store.state.translations["config.required"],
            trigger: "change",
          },
        ],
        network_interfaces_count: [
          {
            required: true,
            message: this.$store.state.translations["config.required"],
            trigger: "change",
          },
        ],
        power_unit_count: [
          {
            required: true,
            message: this.$store.state.translations["config.required"],
            trigger: "change",
          },
        ],
        server_options: {
          type: [
            {
              required: true,
              message: this.$store.state.translations["config.required"],
              trigger: "change",
            },
          ],
          cpu: [
            {
              required: true,
              message: this.$store.state.translations["config.required"],
              trigger: "change",
            },
          ],
          ram: [
            {
              required: true,
              message: this.$store.state.translations["config.required"],
              trigger: "change",
            },
          ],
          connect: [
            {
              required: true,
              message: this.$store.state.translations["config.required"],
              trigger: "change",
            },
          ],
          power: [
            {
              required: true,
              message: this.$store.state.translations["config.required"],
              trigger: "change",
            },
          ],
        },
      },
    };
  },

  async asyncData({ $axios, query, i18n }) {
    const attributes = await attributesApi.getAttributes($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      attributes,
    };
  },

  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);

        this.file = info.file.response.upload_url;
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },

    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
        email: this.email,
        file: this.file,
      };

      const res = await formApi.sendApplication(formData);

      if (this.file.length > 0) {
        if (res && res.status === 201) {
          this.$notification["success"]({
            message: this.$store.state.translations["config.success_upload"],
          });
        } else {
          this.$notification["error"]({
            message: this.$store.state.translations["config.error"],
          });
        }

        const message = `Name: ${this.full_name}%0APhone Number: ${this.number}`;

        this.$axios
          .post(
            `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
          )
          .then((response) => {
            console.log("Successfully", response);
            this.full_name = "";
            this.number = "";
            this.email = "";
            this.file = null;
          }),
          (error) => {
            console.log(error);
          };
      } else {
        this.error = true;
        this.$notification["error"]({
          message: this.$store.state.translations["config.upload_file"],
        });
      }
    },

    async serverSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      const formData = {
        name: this.server_form.name,
        phone_number: this.server_form.phone_number,
        email: this.server_form.email,
        execution_type: this.server_form.execution_type,
        ram_count: this.server_form.ram_count,
        hard_disks_first_count: this.server_form.hard_disks_first_count,
        hard_disks_second_count: this.server_form.hard_disks_second_count,
        network_interfaces_count: this.server_form.network_interfaces_count,
        power_unit_count: this.server_form.power_unit_count,
        options: Object.values(this.server_form.server_options),
      };

      const res = await formApi.sendServerApplication(formData);

      if (res && res.status === 201) {
        this.$notification["success"]({
          message: this.$store.state.translations["config.success_upload"],
        });
      } else {
        this.$notification["error"]({
          message: this.$store.state.translations["config.error"],
        });
      }
    },
  },
};
</script>

<style scoped>
.buttons {
  max-width: 1330px;
  border-radius: 12px;
  background: #f3f5f7;
  padding: 8px;
  display: inline-flex;
  gap: 16px;
}
.buttons button {
  border-radius: 8px;
  background: #f3f5f7;
  padding: 8px 40px;
  color: var(--Dark-Border-server, #313641);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.buttons button.active {
  color: var(--green);
  border-radius: 8px;
  background: var(--White, #fff);
}
.cover {
  max-width: 1330px;
  margin: 0 auto;
}
.body {
  border-radius: 12px;
  background: #f3f5f7;
  margin-top: 40px;
  margin-bottom: 120px;
  padding: 72px 0 72px 0;
}
.config,
.tech {
  max-width: 1064px;
  margin: 0 auto;
}
.title {
  color: var(--Server-BG, #080b12);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 32px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.item {
  display: grid;
  grid-template-columns: 4fr 3.5fr 2.5fr;
  gap: 16px;
}
.name {
  display: flex;
  align-items: center;
  gap: 12px;
}
.name p {
  color: var(--Dark-service, #12151c);
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.logo {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dot {
  color: #f00;
}
.config :deep(.ant-select-selection) {
  padding: 12px 16px;
  border-radius: 8px;
  height: auto;
  width: 100%;
  border: 1px solid transparent;
}

.config :deep(.ant-select-selection__rendered) {
  margin: 0;
  line-height: inherit;
}

.config :deep(.ant-select-selection-selected-value) {
  color: var(--Server-BG, #080b12);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}
.config :deep(.ant-select-selection-selected-value) {
  transform: translateY(-2px);
}
.warn {
  border-radius: 16px;
  background: linear-gradient(92deg, #1ab99d -3.04%, #5eb7a8 103.6%);
  padding: 32px 40px;
  margin-top: 64px;
  position: relative;
}
.vector {
  position: absolute;
  top: 8px;
  right: 8px;
}
.warn h4 span {
  display: flex;
}
.warn h4 {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
.warn p {
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  max-width: 500px;
}
.inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 16px;
}
.app {
  margin-top: 64px;
}
.input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input label {
  color: var(--grey-40, #9a999b);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.input input {
  color: var(--Dark-Border-server, #313641);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  border-radius: 8px;
  background: var(--White, #fff);
  padding: 14px 24px;
}
.input {
  position: relative;
}
.pen {
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  right: 24px;
}
.battons {
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.cancel {
  color: var(--Dark-Border-server, #313641);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding: 14px 48px;
  border-radius: 8px;
  background: var(--White, #fff);
}
.submit {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding: 14px 48px;
  border-radius: 8px;
  color: white !important;
  background: var(--green);
}
.tech :deep(.ant-btn) {
  width: 700px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 14px 24px;
  border: 0;
  justify-content: space-between;
}
.tech :deep(.ant-btn span) {
  position: relative;
  display: flex;
}
.tech :deep(.ant-upload-list) {
  max-width: 700px;
}
.tab {
  display: none;
}
.tab.active {
  display: block;
}
.config :deep(.ant-form-item) {
  margin-bottom: 0;
}
.config :deep(.has-error .ant-select-selection) {
  border-color: #f5222d !important;
}
@media screen and (max-width: 1024px) {
  .buttons button {
    padding: 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .body {
    padding: 24px;
    margin-top: 24px;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 32px;
  }
  .item {
    grid-template-columns: repeat(1, 1fr);
  }
  .warn {
    padding: 24px;
  }
  .warn h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .warn p {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
  .warn .vector svg {
    width: 56px;
    height: 56px;
  }
  .name p {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .inputs {
    grid-template-columns: repeat(1, 1fr);
  }
  .cancel,
  .submit {
    padding: 14px 0;
  }
  .battons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .tech :deep(.ant-btn),
  .tech :deep(.ant-upload) {
    width: 100%;
  }
}
</style>
