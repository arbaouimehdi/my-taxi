/**
 *
 *
 * Breaks
 *
 *
 */
import {dataTable} from "../global/data-table";

$(document).ready(function(){

  if ($('#break-data')) {
    dataTable.setOptions(true, false, [5], false, 1);
    dataTable.setTable('break-data', 'search-break');
  }

});