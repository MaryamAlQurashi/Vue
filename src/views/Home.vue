<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Nest Packet List App Tutorial</h1>
       <p> Built with Nest.js, Vue.js and MongoDB</p>
       <div v-if="packets.length === 0">
            <h2> No packet found at the moment </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">TIME</th>
                  <th scope="col">IP_SRC</th>
                  <th scope="col">IP_DST</th>
                  <th scope="col">SRC_PORT</th>
                  <th scope="col">DST_PORT</th>
                  <th scope="col">TTL</th>
                  <th scope="col">PROTOCOL</th>
                  <th scope="col">HTTP_VRS</th>
                  <th scope="col">HTTP_VRQ</th>
                  <th scope="col">STATUS_CODE</th>
                  <th scope="col">REASON_PH</th>
                  <th scope="col">CONT_LEN_RS</th>
                  <th scope="col">CONT_LEN_RQ</th>
                  <th scope="col">CONT_TYPE_RS</th>
                  <th scope="col">CONT_TYPE_RQ</th>
                  <th scope="col">URL</th>
                  <th scope="col">METHOD</th>
                  <th scope="col">PAYLOAD</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="packet in packets" :key="packet._id">
                  <td>{{ packet.TIME }}</td>
                  <td>{{ packet.IP_SRC }}</td>
                  <td>{{ packet.IP_DST }}</td>
                  <td>{{ packet.SRC_PORT }}</td>
                  <td>{{ packet.DST_PORT }}</td>
                  <td>{{ packet.TTL }}</td>
                  <td>{{ packet.PROTOCOL }}</td>
                  <td>{{ packet.HTTP_VRS }}</td>
                  <td>{{ packet.HTTP_VRQ }}</td>
                  <td>{{ packet.STATUS_CODE }}</td>
                  <td>{{ packet.REASON_PH }}</td>
                  <td>{{ packet.CONT_LEN_RS }}</td>
                  <td>{{ packet.CONT_LEN_RQ }}</td>
                  <td>{{ packet.CONT_TYPE_RS }}</td>
                  <td>{{ packet.CONT_TYPE_RQ }}</td>
                  <td>{{ packet.URL }}</td>
                  <td>{{ packet.METHOD }}</td>
                  <td>{{ packet.PAYLOAD }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: packet._id}}" class="btn btn-sm btn-outline-secondary">Edit Packet </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deletePacket(packet._id)">Delete Packet</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      packets: []
    };
  },
  created() {
    this.fetchPackets();
  },
  methods: {
    fetchPackets() {
      axios
        .get(`${server.baseURL}/packet/packets`)
        .then(data => (this.packets = data.data));
    },
    deletePacket(id) {
      axios
        .delete(`${server.baseURL}/packet/delete?packetID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>
