<script type="text/javascript">
$(function(){
  /* 
    Works Ajax
  */
	var 
		work = $(".work"),
		thumbUrl = "",//拡大後に使用する大きい画像
		workTit,
		workDetail,

		selfOffsetTop = 0,
		nextOffsetTop = 0,
		flgOpen = 0,
		self,next,siblings,
		selfIndex = 0,
		insertIndex = 0,
		searchingIndex = 0,
		temp
	;

	var templete_start = '<div id="moreWokDetail">';
	var templete_btnCloseMoreWokDetail = '<span id="btnCloseMoreWokDetail"></span>';
	var templete_end = '</div>';

/*
		searchingIndex = selfIndex+1;
		searchingIndex = selfIndex-1;
		console.log("selfIndex"+selfIndex);
		console.log("insertIndex　"+insertIndex);
		if( selfIndex === insertIndex ){
			return removeMoreWorkDetail();
		}
*/



	function removeMoreWorkDetail(){
		flgOpen = 0;
		return $("#moreWokDetail").remove();
	}

	function appendMoreWorkDetail(temp){
		console.log(selfIndex);
		console.log(insertIndex);

/*
		if( flgOpen === 1 ){
			if( insertIndex === selfIndex ){
				return removeMoreWorkDetail();
			}
		}
*/
		flgOpen = 1;
		$(temp).insertAfter(work[insertIndex]);
		$("#btnCloseMoreWokDetail").click(function(){
			return removeMoreWorkDetail();
		});
	}

	function makeMoreWorkDetail(){
		self.addClass("active").siblings().removeClass("active");
		var temp = "";
		temp += templete_start;
		temp += templete_btnCloseMoreWokDetail;
		temp += '<img src="'+ thumbUrl +'" width="100%" height="180" />';
		temp += workTit[0].outerHTML;
		temp += workDetail[0].outerHTML;
		temp += templete_end;
		return appendMoreWorkDetail(temp);
	}

	function searchInsertPlace(){



		selfOffsetTop = self.offset().top;

		if( work.length <= searchingIndex ){
			insertIndex = Number(searchingIndex)-1;
			return makeMoreWorkDetail();
		}
		comparisonOffsetTop = $(work[searchingIndex]).offset().top;
		if( selfOffsetTop === comparisonOffsetTop ){//行の最後
			searchingIndex++;
			return searchInsertPlace();
		}
		insertIndex = Number(searchingIndex)-1;
		return makeMoreWorkDetail();
	}

	function checkFlg(){
		next = work[(selfIndex+1)];
		insertIndex = selfIndex;
		if( next ){
			return searchInsertPlace();
		}
		return makeMoreWorkDetail();
	}

	work.click(function(e){
		e.preventDefault();
		self = $(this);
		thumbUrl = self.attr("href");
		workTit = $('.workTit',self);
		workDetail = $('.workDetail',self);
		selfIndex = self.index();
		if( flgOpen === 0 ){
			insertIndex = selfIndex;
		}
		return checkFlg();
	});


});
</script>
