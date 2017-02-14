jQuery.noConflict();

(function($) {
	$(function() {
		// Клик по кнопке 'Редактировать комплектацию'
		$('#editComplect').bind('click', function() {
			$('[toggle-on-edit-complect]').removeClass('hidden');
			$('[enable-on-edit-complect]').removeAttr('disabled');
			$(this).addClass('hidden');
		});
		// Клик по кнопке 'Отмена' в режиме редактирования комплектации
		$('#cancelEditComplect').bind('click', function() {
			$('[toggle-on-edit-complect]').addClass('hidden');
			$('[enable-on-edit-complect]').attr('disabled', '');
			// Удаляем пометки 'удален'-ых элементов комплекта, делаем видимыми
			$('[removed]').removeAttr('removed').parent().removeClass('hidden');
			$('#editComplect').removeClass('hidden');
		});
		// Клик по кнопке 'Удалить' элемент комплекта
		$('.remove-complect-item').bind('click', function(e) {
			e.preventDefault();
			var productItemContainer = $(this).closest('.product-item'),
				productItemCol = productItemContainer.parent();
			// Помечаем как удаленный (не удаляя)
			productItemContainer.attr('removed', '');
			// Скрываем (как будто удален)
			productItemCol.addClass('hidden');
		})
	});
})(jQuery)