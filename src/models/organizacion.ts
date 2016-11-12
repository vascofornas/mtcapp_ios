interface Organizacion{
	id;
	nombre:string;
	imagen:string;
	tipo_ubicacion_id?;
	organizacion_padre_id?;
	tipo_organizacion_id?;
	direccion?:string;
	descripcion?:string;
	latitud?;
	longitud?;
	url?:string;
	url_facebook?:string;
	url_twitter?:string;
	url_youtube?:string;
	telefono?:string;
	email?:string;
	created_at?;
	updated_at?;
	numero_hijos?:number;
}

export default Organizacion;
