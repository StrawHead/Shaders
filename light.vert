/***************************************************
file light.vert
author Layne Duras
email: duras.l@digipen.edu
DigiPen login: duras.l
Course: CS200
Assignment #9
due date: 11/4/2022
***************************************************/
#version 130

in vec4 position;
in vec2 texcoord;

uniform mat4 object_to_world;
uniform mat4 world_to_ndc;

out vec2 interp_world_position;
out vec2 interp_texcoord;

void main(void) {
	//compute the values of the output variables.
	interp_world_position = (object_to_world * position).xy;
	interp_texcoord = texcoord;

	//compute the NDC coordinates of the mesh vertices 
	gl_Position = world_to_ndc * object_to_world * position;
	
};