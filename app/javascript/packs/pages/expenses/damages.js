/**
 *
 *
 * Damages
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#damage-data')) {
    dataTable.setOptions(true, false, [6], false, 2);
    dataTable.setTable('damage-data', 'search-damage');
  }

});