/***************************************************
file light.frag
author Layne Duras
email: duras.l@digipen.edu
DigiPen login: duras.l
Course: CS200
Assignment #9
due date: 11/4/2022
***************************************************/
#version 130

in vec2 interp_world_position;
in vec2 interp_texcoord;

uniform vec4 light_position;
uniform float light_radius;
uniform float light_factor;
uniform float ambient_factor;
uniform sampler2D usampler;

out vec4 frag_color;

void main(void) {
	//get the texture color corresponding to the input texture coordinate
	frag_color = texture(usampler, interp_texcoord);

	//multiply this color by the lighting factor ftot 
	vec2 psubc = interp_world_position - light_position.xy;
	float fspot = (light_radius/sqrt(psubc.x*psubc.x + psubc.y*psubc.y));
	fspot *= fspot;

	if(fspot < 1)
		frag_color *= (ambient_factor + light_factor * fspot);
	else
		frag_color *= (ambient_factor + light_factor * 1);
	
};